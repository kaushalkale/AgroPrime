import React from 'react';
import '../Css/WhatWeOffer.css';
import { Link } from 'react-router-dom';

const services = [
  {
    path: '/AgroProducts',
    title: 'Agriculture Products',
    desc: 'We offer complete range of agricultural products including high-quality crops like wheat, rice, maize, onions, and potatoes,available in bulk for wholesalers and retailers.For crop protection, we supply branded insecticides , and eco-friendly bio-pesticides.',
    image: '/images/offer1.webp',
    icon: '👨‍🌾',
  },
  {
    path: '/CashCrops',
    title: 'Organic Products',
    desc: 'Our organic fertilizers like vermicompost, cow dung manure, and bio-compost enrich the soil naturally and promote sustainable farming.All products are 100% organic, and suitable for health-conscious consumers and eco-friendly farms, ensuring safe food.',
    image: '/images/offer2.webp',
    icon: '🥬',
  },
  {
    path: '/Seeds',
    title: 'Seeds Products',
    desc: 'We offer a wide range of high-quality agricultural seeds including certified hybrid and open-pollinated varieties for vegetables, cereals, pulses, and oilseeds.all selected for high germination, disease resistance, and maximum yield. ',
    image: '/images/offer3.webp',
    icon: '🌱',
  },
  {
    path: '/equipments',
    title: 'Modern Farming Tools',
    desc: 'We provide a complete range of modern agricultural equipment designed to improve productivity and reduce manual labor, including tractors, power tillers, rotavators, cultivators, and harvesters.With durable build quality and latest technology.',
    image: '/images/offer4.avif',
    icon: '🚜',
  },
  {
    path: '/Weather',
    title: 'Weather Forecast',
    desc: 'Stay informed with real-time weather forecasts tailored for farmers and agricultural activities. Get daily and weekly updates on temperature, rainfall, humidity, wind speed, and chances of storms or droughts. .',
    image: '/images/offer5.webp',
    icon: '🌦️',
  },
  {
    path: '/AllProduct',
    title: 'Other Products',
    desc: 'We also offer a variety of other essential agriculture products including quality animal feed, silage, organic manure, biochar, farm tools like hoes and sickles, greenhouse accessories, polyhouse films, solar-powered pumps, fencing materials,etc.',
    image: '/images/offer6.webp',
    icon: '📦',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="whatweoffer-section">
      <div className="whatweoffer-subtitle">Our Services</div>
      <h2 className="whatweoffer-title">What We Offer</h2>

      <div className="whatweoffer-grid">
        {services.map((item, idx) => (
          <Link key={idx} to={item.path} className="whatweoffer-link">
            <div className="whatweoffer-card">
              <img src={item.image} alt={item.title} className="whatweoffer-image" />
              <div className="whatweoffer-content">
                <div className="whatweoffer-icon">{item.icon}</div>
                <div className="whatweoffer-titleText">{item.title}</div>
                <div className="whatweoffer-desc">{item.desc}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
