import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Submit form logic
    console.log('Signup Data:', form);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#fceef5', fontFamily: 'Poppins, sans-serif' }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', backgroundColor: '#fff' }}>
        <h3 className="text-center mb-3" style={{ color: '#b96fb0' }}>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn w-100 text-white" style={{ backgroundColor: '#b96fb0' }}>
            Sign Up
          </button>
        </form>

        <hr className="my-4" />

        <button className="btn btn-outline-dark w-100">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" className="me-2" />
          Sign Up with Google
        </button>
        <p className="text-center mt-3">
  Already have an account?{' '}
  <a href="/login" className="text-decoration-none" style={{ color: '#b96fb0', fontWeight: '600' }}>
    Login
  </a>
</p>

      </div>
    </div>
  );
}

export default SignUpForm;
