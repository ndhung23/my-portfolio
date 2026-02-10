import { Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SidebarLeft() {
  // Menu data
  const menus = [
    { icon: Home, label: "Trang chủ", active: true },
    { icon: User, label: "Giới thiệu bản thân" },
    { icon: Briefcase, label: "Dự án của tôi" },
    { icon: Code, label: "Kỹ năng & Tech" },
    { icon: Mail, label: "Liên hệ hợp tác" }
  ];

  return (
    <aside className="position-fixed" style={{top: '90px' }}>
      <div className="d-flex flex-column gap-2">
        {menus.map((item, idx) => (
            <div 
              key={idx}
              className={`d-flex align-items-center gap-3 p-3 rounded-4 cursor-pointer transition-all ${item.active ? 'custom-card' : ''}`}
              style={{ 
                  backgroundColor: item.active ? 'var(--bg-card)' : 'transparent',
                  border: item.active ? '1px solid #333' : 'none',
                  color: item.active ? 'var(--accent-blue)' : '#888'
              }}
            >
                <item.icon size={20} />
                <span className="fw-bold small">{item.label}</span>
            </div>
        ))}
      </div>

      <div className="mt-5 ps-3 pt-3 border-top border-secondary">
          <small className="text-muted" style={{ fontSize: '10px', letterSpacing: '1px' }}>
              ASTRA PORTFOLIO © 2026<br/>DESIGN BY HUNGDEV
          </small>
      </div>
    </aside>
  );
}