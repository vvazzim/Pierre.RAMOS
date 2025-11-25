import React, { useState, useEffect } from 'react';

const baseImages = [
  '1.JPG', 
  '2.JPG',
  '3.JPG',
  '4.JPG',
  '5.JPG',
  '6.JPG',
  '7.JPG',
  '8.JPG',
];

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 300;

      if (scrollPosition >= threshold) {
        setVisibleCount((prev) => prev + 6);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = Array.from({ length: visibleCount }, (_, index) => {
    const file = baseImages[index % baseImages.length];
    return {
      key: index,
      src: `/images/${file}`, // Relative path to the public folder
    };
  });

  return (
    <section className="work-page">
      <h1 className="work-location">Paris, FR</h1>
      <p className="work-metrics">
        Height: 6&apos;2 | Weight: 175 lbs | Suit: 38R | Waist: 33 | Inseam: 33
        | Eyes: Dark Brown | Hair: Black | Shoe: 13
      </p>

      <div className="work-gallery-grid">
        {items.map((item) => (
          <img
            key={item.key}
            src={item.src}
            alt={`Portfolio ${item.key + 1}`}
            className="work-image"
            loading='lazy'
          />
        ))}
      </div>
    </section>
  );
}
