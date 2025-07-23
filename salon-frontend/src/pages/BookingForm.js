import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/forms.css';

function BookingForm() {
  const [services, setServices] = useState([]);
  const [booking, setBooking] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    timeSlot: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5245/api/service')
      .then(res => setServices(res.data))
      .catch(err => console.error('Error fetching services:', err));
  }, []);

  const handleChange = e => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = { ...booking, serviceId: parseInt(booking.serviceId) };

    axios.post('http://localhost:5245/api/booking', payload)
      .then(res => {
        setMessage('🎉 Booking successful!');
        setBooking({
          customerName: '',
          email: '',
          phone: '',
          serviceId: '',
          date: '',
          timeSlot: ''
        });
      })
      .catch(err => {
        console.error(err);
        setMessage('❌ Booking failed.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4" style={{ borderRadius: '20px' }}>Book an Appointment</h2>

        {message && <div className="alert alert-info text-center">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control form-control-sm" name="customerName" value={booking.customerName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-sm" name="email" value={booking.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control form-control-sm" name="phone" value={booking.phone} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Select Service</label>
            <select className="form-select form-select-sm" name="serviceId" value={booking.serviceId} onChange={handleChange} required>
              <option value="">-- Select --</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - Rs. {service.price}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Date</label>
            <input type="date" className="form-control form-control-sm" name="date" value={booking.date} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Time Slot</label>
            <input type="time" className="form-control form-control-sm" name="timeSlot" value={booking.timeSlot} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-accent w-100">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
