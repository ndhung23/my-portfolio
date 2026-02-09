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
    profilePicture: {
      type: String,
      default: "", // Link ảnh avatar (để trống nếu chưa có)
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
  },
  { timestamps: true } // Tự động tạo 2 trường: createdAt và updatedAt
);

module.exports = mongoose.model("User", UserSchema);