import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();//về login
    setError(false);
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    try {
      // Gọi API Register
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      // Nếu thành công:
      //alert("Tạo tài khoản thành công! Hãy đăng nhập ngay.");
      navigate("/login", { state: { email: email, password: password } }); // Chuyển sang trang Login
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#18191a" }}
    >
      {/* CSS đè màu placeholder */}
      <style>
        {`
          .custom-input::placeholder {
            color: #b0b3b8 !important;
            opacity: 1;
          }
        `}
      </style>

      <div
        className="card p-4 shadow-lg border-0"
        style={{ width: "400px", backgroundColor: "#242526", color: "white" }}
      >
        <h3 className="text-center mb-4 fw-bold">Tạo Tài Khoản</h3>

        <form onSubmit={handleRegister}>
          {/* Ô nhập Tên hiển thị (Mới thêm) */}
          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>Tên hiển thị</label>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Ví dụ: User1"
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                backgroundColor: "#3a3b3c",
                border: "1px solid #3e4042",
                color: "white",
                padding: "10px"
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>Email</label>
            <input
              type="email"
              className="form-control custom-input"
              placeholder="Nhập email..."
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                backgroundColor: "#3a3b3c",
                border: "1px solid #3e4042",
                color: "white",
                padding: "10px"
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>Mật khẩu</label>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Nhập mật khẩu..."
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6" // Bắt buộc nhập ít nhất 6 ký tự
              style={{
                backgroundColor: "#3a3b3c",
                border: "1px solid #3e4042",
                color: "white",
                padding: "10px"
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#e4e6eb" }}>
              Xác Nhận Mật khẩu</label>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Nhập lại mật khẩu..."
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="6" // Bắt buộc nhập ít nhất 6 ký tự
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
            style={{ backgroundColor: "#42b72a", color: "white", padding: "10px" }} // Nút màu xanh lá cây cho khác biệt nút Login
          >
            Đăng Ký
          </button>

          {error && <span className="text-danger mt-3 d-block text-center fw-bold">Lỗi: Email hoặc tên này đã có người dùng!</span>}
        </form>

        <div className="mt-4 text-center">
          <small style={{ color: "#b0b3b8" }}>
            Đã có tài khoản?{" "}
            <Link to="/login" style={{ color: "#0866ff", textDecoration: "none", fontWeight: "bold" }}>
              Đăng nhập ngay
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}