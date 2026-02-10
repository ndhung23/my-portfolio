import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="custom-card rounded-4 p-0 mb-4 overflow-hidden">
      {/* Header */}
      <div className="p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
            <img src={post.avatar} className="rounded-circle border border-dark" width="40" height="40" alt="" />
            <div>
                <h6 className="m-0 fw-bold text-white d-flex align-items-center gap-2">
                    {post.author} 
                    <span className="badge bg-secondary text-uppercase" style={{ fontSize: '8px' }}>Verified</span>
                </h6>
                <small className="text-muted" style={{ fontSize: '11px' }}>{post.time} · 🌌 Deep Space</small>
            </div>
        </div>
        <MoreHorizontal size={20} color="#666" />
      </div>

      {/* Content */}
      <div className="px-3 pb-3">
        <p className="text-light small mb-3">{post.content}</p>
        {post.image && (
            <img src={post.image} className="w-100 rounded-3 object-fit-cover" style={{ maxHeight: '400px' }} alt="Post" />
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-3 border-top border-dark d-flex gap-4">
        <div className="d-flex align-items-center gap-2 cursor-pointer" onClick={() => setLiked(!liked)} style={{ color: liked ? '#ff4757' : '#888' }}>
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
            <span className="small fw-bold">{liked ? post.likes + 1 : post.likes}</span>
        </div>
        <div className="d-flex align-items-center gap-2 cursor-pointer text-muted">
            <MessageCircle size={20} />
            <span className="small fw-bold">{post.comments}</span>
        </div>
        <div className="d-flex align-items-center gap-2 cursor-pointer text-muted ms-auto">
            <Share2 size={20} />
        </div>
      </div>
    </div>
  );
}