const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Bắt buộc phải biết bài này của ai
    },
    desc: {
      type: String,
      max: 500, // Nội dung bài viết (Status)
    },
    img: {
      type: String, // Link ảnh bài đăng (nếu có)
    },
    likes: {
      type: [String],
      default: [], // Mảng chứa ID những người đã like bài này
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment",// Chứa danh sách ID các comment của bài này
        }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);