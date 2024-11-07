import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
  // Sample consultations data
  const consultations = [
    { id: 1, doctorName: 'Dr. John Doe', speciality: 'Cardiology' },
    { id: 2, doctorName: 'Dr. Jane Smith', speciality: 'Dermatology' },
  ];

  // States to manage selected consultation, review form data, and submission status
  const [selectedConsultation, setSelectedConsultation] = useState(null);
  const [reviewSubmitted, setReviewSubmitted] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });

  // Open feedback form on button click
  const handleFeedbackClick = (consultationId) => {
    setSelectedConsultation(consultationId);
  };

  // Update form data as user types
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Set rating value
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  // Submit feedback form
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewSubmitted({ ...reviewSubmitted, [selectedConsultation]: true });
    alert(`Review submitted for ${formData.name} with rating ${formData.rating}`);
    setSelectedConsultation(null);
  };

  return (
    <div className="review-form-container">
      <h2>Reviews</h2>
      <table className="reviews-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Specialty</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation, index) => (
            <tr key={consultation.id}>
              <td>{index + 1}</td>
              <td>{consultation.doctorName}</td>
              <td>{consultation.speciality}</td>
              <td>
                <button
                  className="feedback-button"
                  onClick={() => handleFeedbackClick(consultation.id)}
                  disabled={reviewSubmitted[consultation.id]}
                >
                  Click Here
                </button>
              </td>
              <td>{reviewSubmitted[consultation.id] ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedConsultation && (
        <div className="feedback-form">
          <h3>Provide Feedback</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Review:
              <textarea
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Rating:
              <select
                name="rating"
                value={formData.rating}
                onChange={(e) => handleRatingChange(e.target.value)}
                required
              >
                <option value="" disabled>Select Rating</option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>{rating}</option>
                ))}
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
