import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import Feed from '../components/Feed';
import RightSidebar from '../components/RightSidebar';

export default function Home() {
  return (
    <div style={{ backgroundColor: "#18191a", minHeight: "100vh", color: "white" }}>
      <Navbar />
      
      <div className="container-fluid px-lg-5 py-4" style={{ marginTop: '70px' }}>
        <div className="row g-4">
          
          {/* Cột trái */}
          <div className="col-lg-3 d-none d-lg-block">
            <LeftSidebar />
          </div>

          {/* Cột giữa */}
          <div className="col-12 col-lg-6">
            <Feed />
          </div>

          {/* Cột phải */}
          <div className="col-lg-3 d-none d-lg-block">
            <RightSidebar />
          </div>

        </div>
      </div>
    </div>
  );
}