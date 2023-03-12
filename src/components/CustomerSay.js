import React from 'react';
import './testimonial.css'

const CustomerSay = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Doe',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Bob Smith',
      rating: 3,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      rating: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Tom Hanks',
      rating: 2,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Sara Johnson',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nulla. Fusce accumsan nulla ut lorem auctor dignissim. Quisque et sapien id tellus imperdiet fringilla.',
      imgSrc: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonial-card-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-card-content">
              <img src={testimonial.imgSrc} alt={testimonial.name} />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-rating">{`Rating: ${testimonial.rating}`}</div>
              <p className="testimonial-review">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSay
