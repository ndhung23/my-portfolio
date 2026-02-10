import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Feed from './components/Feed';
import SupportModal from './components/SupportModal';
import { Plus } from 'lucide-react';

function App() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-vh-100" style={{ backgroundColor: 'var(--bg-body)', color: 'var(--text-main)' }}>
        <Navbar />
        
        {/* Thêm px-0 hoặc px-2 để sát lề hơn nếu muốn */}
        <div className="container-fluid px-3 px-lg-4" style={{ paddingTop: '80px' }}>
          
          {/* Thêm 'justify-content-between' để đẩy cột Trái và Phải ra xa nhau nhất */}
          <div className="row g-4 justify-content-between"> 
            
            {/* CỘT TRÁI */}
            <div className="col-lg-3 col-xl-2 d-none d-lg-block position-relative">
              <SidebarLeft />
            </div>

            {/* CỘT GIỮA: Tăng lên col-xl-7 cho rộng rãi vì cột phải đã bé lại */}
            <div className="col-12 col-lg-6 col-xl-7">
              <Feed />
            </div>

            {/* CỘT PHẢI: Giảm xuống col-2 cho nhỏ gọn */}
            <div className="col-lg-3 col-xl-2 d-none d-lg-block position-relative">
              <SidebarRight onOpenSupport={() => setIsSupportModalOpen(true)} />
            </div>

          </div>
        </div>

        <SupportModal isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />

        <button 
          onClick={() => setIsSupportModalOpen(true)}
          className="btn-gradient position-fixed rounded-circle d-lg-none shadow-lg d-flex align-items-center justify-content-center"
          style={{ bottom: '20px', right: '20px', width: '56px', height: '56px', zIndex: 1000 }}
        >
          <Plus size={24} color="white" />
        </button>
      </div>
    </Router>
  );
}

export default App;