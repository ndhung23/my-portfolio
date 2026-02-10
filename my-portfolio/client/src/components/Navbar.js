import { Search, Bell, MessageSquare, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Lấy user từ localStorage (nếu có)
  const user = JSON.parse(localStorage.getItem("user")) || { 
    name: "User Demo", 
    avatar: "https://i.imgur.com/HeIi0wU.png" 
  };

  return (
    <nav className="fixed-top px-4 py-2 bg-glass d-flex align-items-center justify-content-between" style={{ height: '70px' }}>
      
      {/* 1. LOGO */}
      <div className="d-flex align-items-center gap-3">
        <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 group">
          <div className="rounded-3 d-flex align-items-center justify-content-center" 
               style={{ width: '36px', height: '36px', background: 'var(--gradient-primary)' }}>
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="fs-4 fw-bold text-gradient" style={{ letterSpacing: '1px' }}>ASTRA</span>
        </Link>
        
        {/* Search Box (Ẩn trên mobile) */}
        <div className="d-none d-lg-block position-relative ms-3">
          <Search className="position-absolute" size={16} color="#888" style={{ top: '10px', left: '12px' }} />
          <input 
            type="text" 
            placeholder="Khám phá vũ trụ..." 
            className="form-control rounded-pill text-white shadow-none"
            style={{ 
              paddingLeft: '35px', 
              backgroundColor: '#1f1f1f', 
              border: '1px solid #333',
              width: '250px'
            }}
          />
        </div>
      </div>

      {/* 2. MENU GIỮA (Giả lập active) */}
      <div className="d-none d-md-flex align-items-center h-100 gap-4">
        {['Trang chủ', 'Dự án', 'Cộng đồng'].map((item, index) => (
            <div key={index} className="d-flex flex-column align-items-center justify-content-center h-100 px-3 cursor-pointer position-relative" 
                 style={{ color: index === 0 ? 'var(--accent-blue)' : '#888' }}>
                <span className="fw-bold" style={{ fontSize: '14px' }}>{item}</span>
                {index === 0 && <div className="position-absolute bottom-0 w-50 rounded-top" style={{ height: '3px', background: 'var(--gradient-primary)' }}></div>}
            </div>
        ))}
      </div>

      {/* 3. PROFILE RIGHT */}
      <div className="d-flex align-items-center gap-3">
        {/* User Info */}
        <div className="d-none d-md-flex align-items-center gap-2 py-1 px-3 rounded-pill border border-dark" style={{ backgroundColor: '#1f1f1f' }}>
            <img src={user.avatar} alt="Avatar" className="rounded-circle" width="30" height="30" />
            <span className="text-white small fw-bold">{user.name}</span>
        </div>

        {/* Icons */}
        <div className="d-flex gap-2">
            {[MessageSquare, Bell, ChevronDown].map((Icon, i) => (
                <div key={i} className="rounded-circle d-flex align-items-center justify-content-center cursor-pointer position-relative"
                     style={{ width: '40px', height: '40px', backgroundColor: '#1f1f1f', color: '#ccc' }}>
                    <Icon size={18} />
                    {i === 1 && <span className="position-absolute rounded-circle" style={{ width: '8px', height: '8px', background: 'var(--accent-orange)', top: '8px', right: '8px' }}></span>}
                </div>
            ))}
        </div>
      </div>
    </nav>
  );
}