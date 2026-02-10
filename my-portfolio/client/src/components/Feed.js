import { Sparkles, Rocket, Zap, Globe } from 'lucide-react';
import PostCard from './PostCard'; 

export default function Feed() {
  // Dữ liệu giả
  const posts = [
    {
      id: 1,
      author: "Nguyễn Văn A",
      avatar: "https://i.imgur.com/HeIi0wU.png",
      time: "2 giờ trước",
      content: "Vừa hoàn thành xong giao diện Dark Mode mới cho Portfolio. Mọi người thấy sao?",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      likes: 45,
      comments: 12
    },
    {
        id: 2,
        author: "Admin Astra",
        avatar: "https://ui-avatars.com/api/?name=Admin&background=random",
        time: "5 giờ trước",
        content: "Cập nhật hệ thống: Đã thêm tính năng đăng nhập bằng Google!",
        image: null,
        likes: 120,
        comments: 30
      }
  ];

  return (
    <div className="pb-5">
      {/* 1. Intro Box */}
      <div className="custom-card p-4 rounded-4 mb-4">
        <div className="d-flex gap-3 mb-4">
            <img src="https://i.imgur.com/HeIi0wU.png" className="rounded-4 border border-secondary" width="50" height="50" alt="" />
            <div className="flex-grow-1 p-3 rounded-4 fst-italic text-muted" style={{ backgroundColor: '#1f1f1f', fontSize: '14px' }}>
                "Chill..."
            </div>
        </div>
        
        {/* Buttons */}
        <div className="d-flex gap-2">
            <ActionButton icon={Rocket} label="Dự án" color="var(--accent-blue)" />
            <div className="vr bg-secondary opacity-25"></div>
            <ActionButton icon={Zap} label="Kỹ năng" color="var(--accent-orange)" />
            <div className="vr bg-secondary opacity-25"></div>
            <ActionButton icon={Globe} label="Liên hệ" color="#00ff88" />
        </div>
      </div>

      {/* 2. Posts List */}
      <div className="mb-2 px-2 d-flex align-items-center gap-2">
        <Sparkles size={14} color="var(--accent-orange)" />
        <small className="fw-bold text-uppercase text-muted" style={{ letterSpacing: '2px', fontSize: '10px' }}>
          Bản tin vũ trụ</small>
      </div>

      {posts.map(post => (
          <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function ActionButton({ icon: Icon, label, color }) {
    return (
        <button className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2 py-2 rounded-3 text-white hover-bg-dark" style={{ border: 'none' }}>
            <Icon size={18} color={color} />
            <span className="small fw-bold text-uppercase" style={{ fontSize: '11px', color: '#ccc' }}>{label}</span>
        </button>
    )
}