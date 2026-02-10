import { Star, Sparkles } from 'lucide-react';

export default function SidebarRight({ onOpenSupport }) {
  return (
    // 1. Thêm position-fixed
    // 2. Thêm right: 0 (hoặc 20px) để dính sát lề phải
    // 3. Set width cố định (ví dụ 260px) để nó không bị bè ra
    <aside className="position-fixed" style={{ top: '90px', right: '20px', width: '260px' }}>
      
      {/* Box Ủng Hộ */}
      <div className="custom-card p-3 rounded-4 mb-4 text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" 
             style={{ background: 'linear-gradient(135deg, rgba(0,198,255,0.1), rgba(255,123,0,0.1))', zIndex: 0 }}></div>
        
        <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="mb-2 d-inline-block p-2 rounded-circle" style={{ backgroundColor: 'rgba(0,198,255,0.1)' }}>
                <Star size={20} color="var(--accent-blue)" fill="var(--accent-blue)" />
            </div>
            <h6 className="fw-bold text-white mb-2">Ủng hộ tôi</h6>
            <p className="text-muted mb-3" style={{ fontSize: '11px' }}>
                Tiếp thêm năng lượng sáng tạo!
            </p>
            <button onClick={onOpenSupport} className="btn-gradient w-100 py-2 rounded-3 d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '12px' }}>
                <Sparkles size={14} /> Donate Ngay
            </button>
        </div>
      </div>

      {/* Đội ngũ */}
      <h6 className="text-muted fw-bold text-uppercase mb-3 px-1" style={{ fontSize: '10px' }}>Đội ngũ nòng cốt</h6>
      <div className="d-flex flex-column gap-2">
        <TeamItem name="Phạm Minh" status="Sẵn sàng" online={true} />
        <TeamItem name="Lê Hoàng" status="Vắng mặt" online={false} />
      </div>
    </aside>
  );
}

function TeamItem({ name, status, online }) {
    return (
        <div className="d-flex align-items-center gap-2 p-2 rounded-3 hover-bg-dark cursor-pointer">
            <div className="position-relative">
                <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} alt={name} className="rounded-3" width="35" height="35" />
                <span className="position-absolute translate-middle p-1 border border-dark rounded-circle" 
                      style={{ backgroundColor: online ? 'var(--accent-blue)' : '#666', bottom: '-6px', right: '-6px' }}></span>
            </div>
            <div>
                <h6 className="m-0 text-white fw-bold" style={{ fontSize: '12px' }}>{name}</h6>
                <small className="text-muted" style={{ fontSize: '10px' }}>{status}</small>
            </div>
        </div>
    )
}