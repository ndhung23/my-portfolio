import React from 'react';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-header">
          Trang Chủ
        </div>
        <div className="card-body">
          <h5 className="card-title">Chào mừng đến với Mạng xã hội của bạn!</h5>
          <p className="card-text">Đây là nơi sẽ hiển thị Newsfeed (bảng tin).</p>
          <a href="/login" className="btn btn-primary">Đăng xuất (Về Login)</a>
        </div>
      </div>
    </div>
  );
}