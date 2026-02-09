function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Hello, đây là Portfolio của Hưng!</h1>
      
      <div className="card text-center mt-4">
        <div className="card-header">
          Test Bootstrap
        </div>
        <div className="card-body">
          <h5 className="card-title">Giao diện đã nhận Bootstrap</h5>
          <p className="card-text">Nếu bạn thấy nút màu xanh bên dưới đẹp trai thì là thành công.</p>
          <button className="btn btn-primary">Nút bấm Bootstrap</button>
          <button className="btn btn-danger ms-2">Nút Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default App;