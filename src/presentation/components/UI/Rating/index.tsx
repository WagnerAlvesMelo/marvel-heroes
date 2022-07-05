import React from 'react';

export default function Rating() {
  return (
    <div className="star-rating">
      {[...Array(5)].map(() => (
        <span className="star">&#9733;</span>
      ))}
    </div>
  );
}
