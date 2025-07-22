import React from 'react';

function LoginForm() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#fef8f5' }} // pastel pink background
    >
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>
        <h2 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Login</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>

          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#b96fb0' }}>
            Login
          </button>
        </form>

        <div className="text-center mt-3 mb-2 text-muted">or</div>

        <button className="btn btn-outline-dark w-100 mb-3">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="google"
            className="me-2"
          />
          Login with Google
        </button>

        <p className="text-center mt-2">
          New user?{' '}
          <a href="/signup" className="text-decoration-none" style={{ color: '#b96fb0', fontWeight: '600' }}>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
