import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  // Giả sử chưa đăng nhập thì user là null
  const user = false; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Nếu đã đăng nhập thì đẩy về Home, chưa thì cho vào Login */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;