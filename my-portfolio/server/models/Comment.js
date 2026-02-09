const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Để biết AI là người bình luận (hiện Avatar, Tên)
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // QUAN TRỌNG: Để biết comment này nằm ở BÀI VIẾT NÀO
      required: true,
    },
    desc: {
      type: String,
      max: 2000,
      required: true, // Nội dung bình luận
    },
    likes: {
      type: [String],
      default: [], // Mảng chứa ID những người đã like bình luận này
    },
  },
  { timestamps: true } // Tự động lưu thời gian comment
);

module.exports = mongoose.model("Comment", CommentSchema);