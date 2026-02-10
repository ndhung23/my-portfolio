const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true, // Tên đăng nhập không được trùng
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true, // Email không được trùng
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    coverPicture: {
      type: String,
      default: "", // Ảnh bìa
    },
    followers: {
      type: Array,
      default: [], // Danh sách id những người theo dõi mình
    },
    followings: {
      type: Array,
      default: [], // Danh sách id những người mình đang theo dõi
    },
    isAdmin: {
      type: Boolean,
      default: false, // Quyền Admin xóa bài người khác
    },
    //Cần mở rộng mới dùng
    // role:{
    //     type:String,
    //     enum:["user","admin","mod"],
    //     default:"user",
    // },  
    desc: {
      type: String,
      max: 50, // Tiểu sử ngắn (Bio)
    },
    city: {
      type: String,
      max: 50,
    },

    // 2. Nhóm thông tin bổ sung (Cập nhật sau)
    fullName: {
      type: String,
      default: "", // Mặc định là chuỗi rỗng
    },
    profilePicture: {
      type: String,
      default: "https://i.imgur.com/HeIi0wU.png", // Ảnh mặc định nếu user chưa up
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    gender: {
      type: String,
      enum: ["Nam", "Nữ", "Khác"],
      default: "Khác",
    },
    address: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      // sparse: true nghĩa là: Cho phép nhiều người cùng để null (chưa có sđt)
      // Nhưng nếu đã điền số thì số đó phải DUY NHẤT.
      unique: true,
      sparse: true,
    },
    // 3. Nhóm quản lý trạng thái (Admin mới thấy/sửa)
    /* 1: Admin (Toàn quyền)
      2: User thường (Mặc định)
      3: Cảnh cáo (Chỉ xem/like, không được đăng/comment)
      4: Banned (Khóa đăng nhập)
    */
    status: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 2, // Tạo mới xong là User thường ngay
    },

  },
  { timestamps: true } // Tự động tạo 2 trường: createdAt và updatedAt
);
// TÍNH TUỔI TỰ ĐỘNG (Virtual Field)
UserSchema.virtual('age').get(function() {
  if (!this.dateOfBirth) return null; // Chưa có ngày sinh thì chưa có tuổi
  const today = new Date();
  const birthDate = new Date(this.dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
});
// Để Virtual Field hiện ra khi convert sang JSON
UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });
module.exports = mongoose.model("User", UserSchema);