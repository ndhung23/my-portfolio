import { useEffect, useState } from 'react';
import { X, CreditCard, Smartphone, Sparkles } from 'lucide-react';

export default function SupportModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => setShow(true), 10);
    else setShow(false);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3" 
         style={{ zIndex: 1050 }}>
      
      {/* Overlay đen mờ */}
      <div className="position-absolute w-100 h-100 bg-black opacity-75" onClick={onClose}></div>

      {/* Modal Content */}
      <div className={`custom-card w-100 rounded-4 position-relative overflow-hidden transition-all ${show ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} 
           style={{ maxWidth: '400px', transition: '0.3s ease' }}>
        
        {/* Header Gradient */}
        <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'var(--gradient-primary)' }}></div>

        <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold text-white m-0 d-flex align-items-center gap-2">
                    <Sparkles size={20} color="var(--accent-blue)" /> Tiếp năng lượng
                </h5>
                <X size={24} className="cursor-pointer text-muted hover-text-white" onClick={onClose} />
            </div>

            {/* QR Code Demo */}
            <div className="bg-white p-3 rounded-3 mb-4 text-center">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExampleDonate" alt="QR" className="img-fluid" />
                 <p className="mt-2 mb-0 text-dark fw-bold small text-uppercase">Quét mã QR</p>
            </div>

            <div className="d-grid gap-3">
                <button className="btn btn-outline-secondary text-white d-flex align-items-center justify-content-center gap-2 py-2 rounded-3 text-start">
                    <CreditCard size={18} color="var(--accent-blue)" /> Chuyển khoản ngân hàng
                </button>
                <button className="btn btn-outline-secondary text-white d-flex align-items-center justify-content-center gap-2 py-2 rounded-3 text-start">
                    <Smartphone size={18} color="var(--accent-orange)" /> Ví điện tử (Momo/ZaloPay)
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}