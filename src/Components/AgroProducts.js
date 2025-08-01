import React from 'react';
import '../Css/AgroProducts.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const products = [
  // Fertilizers
  { name: 'Organic NPK Fertilizers', image: 'https://m.media-amazon.com/images/I/61GuTKoq4yL.jpg', desc: 'Premium organic fertilizers blend', price: '$24.99/bag' },
  { name: 'Bio NPK Fertilizer', image: 'https://www.nbclindia.com/image/product-page/NPK.png', desc: 'Liquid for Organic Gardening', price: '$22.75/bottle' },
  { name: 'Dr. Bacto COMBO', image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/437269863/UC/QF/KA/44256661/dr-bacto-s-combo.jpeg', desc: 'Microbial Liquid Consortia', price: '$20.99/bottle' },

  // Seeds
  { name: 'Okra Seeds', image: 'https://www.jiomart.com/images/product/original/rvhmsri5pd/jignisha-seeds-organic-okra-seeds-pack-of-50-product-images-orvhmsri5pd-p609847355-1-202408221056.jpg?im=Resize=(420,420)', desc: 'High germination rate', price: '$4.99/pack' },
  { name: 'Tomato Hybrid Seeds', image: 'https://agribegri.com/productimage/af5267af858360ce86b4e47301b55556-02-03-20-15-09-06.webp', desc: 'Disease-resistant variety', price: '$7.25/pack' },
  { name: 'Brinjal Seeds', image: 'https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG159/brinjal-green-blue-seed-vitamins-nutrition-order-vegetable-naatigrains-1000x1000.jpg', desc: 'Resistant and productive', price: '$5.45/pack' },


  // Cash Crops
  { name: 'Hybrid Maize Seeds', image: 'https://agribegri.com/productimage/17467238921750166358.webp', desc: 'High yield variety', price: '$12.99/bag' },
  { name: 'Premium Cotton Seeds', image: 'https://images.jdmagicbox.com/quickquotes/images_main/premium-quality-cotton-seed-2229662222-stztntst.jpg', desc: 'High-quality cotton hybrids', price: '$19.90/bag' },
  { name: 'Groundnut Seeds', image: 'https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64c4e1d69c11938a721ad6f2/groundnut-seeds-640x640.webp', desc: 'Early maturity seeds', price: '$16.40/bag' },
  
  // Equipments
  { name: 'Hand Sprayer', image: 'https://m.media-amazon.com/images/I/41ZeFCfbh9L._UF1000,1000_QL80_.jpg', desc: 'Pressure-based pesticide sprayer', price: '$42.00/unit' },
  { name: 'Soil Tester Kit', image: 'https://m.media-amazon.com/images/I/71AXgAlbO4L.jpg', desc: 'Check soil pH & moisture', price: '$35.50/unit' },
  { name: 'Mini Tiller', image: 'https://www.spaark.in/cdn/shop/files/heavy-duty-mini-tiller-3-5-hp-1.jpg?v=1749978954', desc: 'Lightweight farm tiller', price: '$120.00/unit' },
  

  // Misc / Duplicates for Fillers
  { name: 'Manganese Sulphate', image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/multiplex-manganese-sulphate-micronutrient-fertilizer-file-3722.jpg?v=1737428007', desc: 'For micronutrient needs', price: '$25.00/bag' },
  { name: 'Soil Boost Pro', image: 'https://m.media-amazon.com/images/I/61NeFoKAbDL.jpg', desc: 'Improves soil health', price: '$29.99/bag' },
  { name: 'AgroBloom X', image: 'https://m.media-amazon.com/images/I/81smzLLwQ3L.jpg', desc: 'Boosts flowering', price: '$38.90/bottle' },

];

const AgroProducts = () => {
  return (
   <div className="agro-container">
      <Navbar />

      <main className="main-section" style={{ marginTop: '100px' }}>
        <h1>Our Agricultural Products</h1>
        <p className="subtitle">Quality products sourced directly from trusted farmers and suppliers</p>

        <div className="category-buttons">
          <Link className='c-btn' to="/AllProduct">All Products</Link>
          <Link className='c-btn' to="/FertilizerProducts">Fertilizers</Link>
          <Link className='c-btn' to="/CashCrops">Cash Crops</Link>
          <Link className='c-btn' to="/Seeds">Seeds</Link>
          <Link className='c-btn' to="/Equipments">Equipments</Link>
        </div>

        <div className="product-cards">
          {products.map((item, i) => (
            <div className="product-card" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="desc">{item.desc || <>&nbsp;</>}</p>
              <p className="price">{item.price}</p>
              <Link to="/OrderDone" state={{product:item}} className="buy-button">Buy now</Link>
            </div>
          ))}
        </div>

        <Link to="/AllProduct" className="view-all">View All Products</Link>
      </main>

      <footer>
        <div>2025 AgroPrime</div>
        <div className="social-links">
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="#">Youtube</a>
        </div>
      </footer>
    </div>
  );
};

export default AgroProducts;