import { useState, useEffect } from 'react';
import axios from 'axios';

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

  // 🔁 Fetch available services from API
  useEffect(() => {
    axios.get('http://localhost:5245/api/service')
      .then(res => setServices(res.data))
      .catch(err => console.error('Error fetching services:', err));
  }, []);

  // 🔁 Update booking state on input change
  const handleChange = e => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  // 📨 Submit booking
 const handleSubmit = e => {
  e.preventDefault();

  const payload = {
    ...booking,
    serviceId: parseInt(booking.serviceId)
  };

  axios.post('http://localhost:5245/api/booking', payload)
    .then(res => {
      setMessage('Booking successful!');
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
      setMessage('Booking failed.');
    });
};


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book an Appointment</h2>
      {message && <div className="alert alert-info">{message}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" name="customerName" value={booking.customerName} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={booking.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input type="text" className="form-control" name="phone" value={booking.phone} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Select Service</label>
          <select className="form-control" name="serviceId" value={booking.serviceId} onChange={handleChange} required>
            <option value="">-- Select --</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - Rs. {service.price}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" name="date" value={booking.date} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Time Slot</label>
          <input type="time" className="form-control" name="timeSlot" value={booking.timeSlot} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-accent">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
