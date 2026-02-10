const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client("478993744642-moannpe85osqe124gq73iq1aboe1ou5u.apps.googleusercontent.com");
router.post("/register", async (req, res) => {
    try {
        //console.log("Dữ liệu nhận được:", req.body);
        const salt = await bcrypt.genSalt(10);//Mức độ mã hóa
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (e) {
        // Nếu lỗi (ví dụ trùng tên, mất mạng...) thì trả về lỗi 500
        //console.log(e);
        res.status(500).json(e);
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            $or: [
                { email: req.body.email },
                { username: req.body.email },
            ]
        });
        if (!user) {
            return res.status(404).json("Tài khoản không hợp lệ!");
        }
        if (user.status === 4) {
            return res.status(403).json("Tài khoản của bạn đã bị khóa tạm thời. Vui lòng liên hệ Admin!");
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json("Sai mật khẩu");
        }
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
})
// ĐĂNG NHẬP BẰNG GOOGLE
router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;
    // 1. Xác thực token với Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "478993744642-moannpe85osqe124gq73iq1aboe1ou5u.apps.googleusercontent.com",
    });
    // 2. Lấy thông tin từ token (Google đã xác nhận)
    const { name, email, picture } = ticket.getPayload();
    // 3. Kiểm tra xem user này đã tồn tại trong DB chưa?
    let user = await User.findOne({ email: email });
    if (user) {
      // 3a. Đã có -> Trả về thông tin đăng nhập luôn
      // (Lưu ý: Nếu user này bị ban thì check thêm status ở đây)
      if (user.status === 4) return res.status(403).json("Tài khoản bị khóa!");
      res.status(200).json(user);
    } else {
      // 3b. Chưa có -> Tự động tạo tài khoản mới
      // Tạo một mật khẩu ngẫu nhiên (vì login Google không cần pass)
      const randomPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(randomPassword, salt);
      // Tạo username từ email (cắt bỏ đuôi @gmail.com) + số ngẫu nhiên để tránh trùng
      const newUsername = email.split("@")[0] + Math.floor(Math.random() * 1000);
      const newUser = new User({
        username: newUsername,
        email: email,
        password: hashedPassword,
        profilePicture: picture, // Lấy luôn avatar Google
        fromGoogle: true, // (Optional) Đánh dấu là user từ Google
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;