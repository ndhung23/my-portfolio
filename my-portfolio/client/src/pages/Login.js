import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      // Nếu có gói quà gửi sang thì bóc ra dùng
      if (location.state.email) setEmail(location.state.email);
      if (location.state.password) setPassword(location.state.password);
    }
  }, [location.state]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      });
      // console.log("Login thành công:", res.data); // Tạm tắt log cho gọn
      // alert("Đăng nhập thành công!"); // Tắt alert cho chuyên nghiệp
      navigate("/"); // Chuyển về trang chủ
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#18191a" }}>
      <style>{`
          .custom-input::placeholder {
            color: #b0b3b8 !important; /* Màu xám sáng cho placeholder */
            opacity: 1;}`}
      </style>
      <div className="card p-4 shadow-lg border-0"
        style={{ width: "400px", backgroundColor: "#242526", color: "white" }}>
        <h3 className="text-center mb-4 fw-bold">Đăng Nhập</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>Tài Khoản</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Nhập tài khoản của bạn..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: "#3a3b3c", border: "1px solid #3e4042",
                color: "white", padding: "10px"
              }} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>Mật khẩu</label>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                backgroundColor: "#3a3b3c",
                border: "1px solid #3e4042",
                color: "white",
                padding: "10px"
              }}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold mt-3"
            style={{ backgroundColor: "#0866ff", color: "white", padding: "10px" }}
          >
            Đăng Nhập
          </button>
          <div className="text-center my-3 text-secondary">HOẶC</div>
          {/* Đăng nhập bằng google */}
          <div className="d-flex justify-content-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  // Lấy token từ Google trả về
                  const token = credentialResponse.credential;
                  // Gửi token xuống Backend để xử lý
                  const res = await axios.post("http://localhost:5000/api/auth/google", {
                    token: token,
                  });
                  // alert("Đăng nhập Google thành công!");
                  navigate("/"); // Về trang chủ
                } catch (err) {
                  console.log(err);
                  alert("Lỗi đăng nhập Google!");
                }
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
          {error && <span className="text-danger mt-3 d-block text-center fw-bold">Sai email hoặc mật khẩu!</span>}
        </form>

        <div className="mt-4 text-center">
          <small style={{ color: "#b0b3b8" }}>
            Chưa có tài khoản?{" "}
            <Link to="/register" style={{ color: "#0866ff", textDecoration: "none", fontWeight: "bold" }}>
              Đăng ký ngay
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}