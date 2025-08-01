import React from 'react';

const WhyChooseUs = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '50px auto',
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#333',
      textAlign: 'justify',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why choose us ?</h2>
      <p style={styles.paragraph}>
        We support farmers with modern tools, organic products, weather updates, and expert advice
        for sustainable agriculture. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        lobortis vulputate dui, non cursus lacus suscipit eget. Cras quis metus at ligula lobortis
        feugiat eu vel eros. Etiam eget pretium est. Proin ac ante dictum lorem suscipit convallis
        nec at turpis. Mauris pellentesque ornare hendrerit. Sed a quam eget est tempor imperdiet.
        Ut sodales, turpis non dapibus fermentum, lorem nibh feugiat ex, eget porta est purus et
        velit. Fusce sollicitudin varius justo non tristique. Sed ut blandit purus. Fusce vitae
        mollis nisi. Donec nec leo auctor leo pretium hendrerit. Donec et libero ante. Integer dolor
        sapien, ultrices non euismod eu, ornare sed nulla. Aenean a viverra purus. Donec velit nunc,
        commodo sed rhoncus ut, ultricies eget libero.
      </p>
    </div>
  );
};

export default WhyChooseUs;
