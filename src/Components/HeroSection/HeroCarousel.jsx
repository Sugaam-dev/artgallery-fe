

    import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroCarousel.css';

// Images
import heroImage1 from '../../assets/images/hero-img1.png';
import heroImage2 from '../../assets/images/hero-img2.png';

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-container">
      <Carousel
        controls={false}
        indicators={false}
        fade
        interval={2000}
        className="hero-carousel"
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-110 hero-carousel-image"
            src={heroImage1}
            alt="First slide"
          />

          {/* TEXT OVERLAY */}
          <div className="hero-text-block animate">
            <h4 className="artist-subtitle">ARTIST OF THE MONTH</h4>
            <h1 className="artist-name">UMA GOKHALE</h1>

            <p className="artist-description">
              Vibrant, tropical artworks bursting with bold color and modern feminine energy
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">SHOP COLLECTION</button>
              <button className="btn-secondary">SHOP ALL</button>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-110 hero-carousel-image"
            src={heroImage2}
            alt="Second slide"
          />

          {/* Text repeats for slide 2 as well */}
          <div className="hero-text-block animate">
            <h4 className="artist-subtitle">THE OCTOBER EDIT </h4>
            <h1 className="artist-name">MINIMAL. MONUMENTAL. NEW</h1>

            <p className="artist-description">
              Shop the latest arrivals
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">ART DROPS</button>
              <button className="btn-secondary">SHOP ALL</button>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default HeroCarousel;


