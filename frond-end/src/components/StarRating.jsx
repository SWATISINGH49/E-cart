import React from 'react';

const StarRating = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);  // Number of full stars
  const halfStar = rating - fullStars >= 0.5;  // Half star if rating has 0.5+
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ color: '#FFD700', fontSize: '18px' }} aria-label={`Rating: ${rating} out of ${maxStars}`}>
      {/* Full Stars */}
      {Array(fullStars).fill(0).map((_, i) => (
        <span key={`full-${i}`}>&#9733;</span>  // solid star ★
      ))}

      {/* Half Star */}
      {halfStar && <span>&#x2605;</span>} {/* or you can use a half star SVG/icon */}

      {/* Empty Stars */}
      {Array(emptyStars).fill(0).map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#ccc' }}>&#9733;</span>  // empty star ★ in grey
      ))}
    </div>
  );
};

export default StarRating;
