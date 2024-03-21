// HomeMainSection.js
import React, { useEffect, useState } from 'react';
import reviews from './reviews'; // Import customer feedback data

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    // Select two random reviews
    const randomIndices = [];
    while (randomIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedReviews = randomIndices.map(index => reviews[index]);
    setRandomReviews(selectedReviews);
  }, []);

  return (
    <div>
      <section className="about-us">
        <h2>About Us</h2>
        {/* Include company's vision and mission */}
        <p>Company's vision and mission statement goes here.</p>
        <button>Shop Now</button>
      </section>
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        {/* Display random customer reviews */}
        {randomReviews.map(review => (
          <div key={review.id} className="review">
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>Rating: {'★'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomeMainSection;