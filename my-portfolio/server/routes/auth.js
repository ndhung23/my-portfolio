const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/register",async(req,res)=>{
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

router.post("/login",async(req,res) =>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json("Tài khoản không hợp lệ!");
        }
        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            return res.status(404).json("Sai mật khẩu");
        }
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
})

module.exports = router;