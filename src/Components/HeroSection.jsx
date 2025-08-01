import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const styles = {
    hero: {
      height: '90vh',
      backgroundImage: 'url("/images/plant123.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      top:'30px',
      color: 'white',
      padding: '40px 60px', // padding from top & left
    },
    heading: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
      margin: 0,
      position: 'absolute',
      top: '250px',
      left: '60px',
      maxWidth: '600px',
    },
    button: {
      position: 'absolute',
      top: '67%',
      left: '16%',
      transform: 'translate(-50%, -50%)',
      padding: '12px 28px',
      backgroundColor: 'rgb(39 103 41)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }
  };

  // const handleHover = (e, isHovering) => {
  //   e.target.style.backgroundColor = isHovering ? 'rgb(39 103 41)' : 'rgb(39 103 41)';
  // };

  return (
    <section style={styles.hero}>
      <h2 style={styles.heading}>Empowering Agriculture, Nourishing Future</h2>
      <Link
        style={styles.button}
        to="/AboutUs"
      >
        Discover More
      </Link>
    </section>
  );
};

export default HeroSection;