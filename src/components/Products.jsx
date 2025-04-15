import React, { useState } from "react";
import "../styles/Products.css";

// Example product data (add image paths accordingly)
const products = [
  {
    id: 1,
    category: "glasses",
    name: "Stylish Glasses",
    description: "Lightweight, durable frames for everyday use.",
    images: [
      "./assets/GlassesImages/stylishglasses/image1.png",
      "./assets/GlassesImages/stylishglasses/image2.png",
      "./assets/GlassesImages/stylishglasses/image3.png",
      "./assets/GlassesImages/stylishglasses/image4.png",
      "./assets/GlassesImages/stylishglasses/image5.png",
      "./assets/GlassesImages/stylishglasses/image6.png",
      "./assets/GlassesImages/stylishglasses/image7.png",
      "./assets/GlassesImages/stylishglasses/image8.png",
      "./assets/GlassesImages/stylishglasses/image9.png",
      "./assets/GlassesImages/stylishglasses/image10.png"
    ],
  },
  {
    id: 2,
    category: "sunglasses",
    name: "Classic Sunglasses",
    description: "Protect your eyes with UV-resistant stylish shades.",
    images: [
      "./assets/GlassesImages/classicsunglasses/image1.png",
      "./assets/GlassesImages/classicsunglasses/image2.png",
      "./assets/GlassesImages/classicsunglasses/image3.png",
      "./assets/GlassesImages/classicsunglasses/image4.png",
      "./assets/GlassesImages/classicsunglasses/image5.png",
      "./assets/GlassesImages/classicsunglasses/image6.png",
      "./assets/GlassesImages/classicsunglasses/image7.png",
      "./assets/GlassesImages/classicsunglasses/image8.png",
      "./assets/GlassesImages/classicsunglasses/image9.png",
      "./assets/GlassesImages/classicsunglasses/image10.png"
    ],
  },
  {
    id: 3,
    category: "lenses",
    name: "Contact Lenses",
    description: "Comfortable and clear vision for all-day wear.",
    images: [
      "./assets/GlassesImages/contactlenses.png"
    ],
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="product-section">
      <h2>Our Collections</h2>

      <div className="filter-buttons">
        {["all", "glasses", "sunglasses", "lenses"].map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            id={filteredProducts.length === 1 ? "product-card-indi" : undefined}
            onClick={() => setModalProduct(product)}
          >
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProduct && (
        <div className="modal-overlay" onClick={() => setModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setModalProduct(null)}
            >
              ×
            </button>
            <h3>{modalProduct.name}</h3>
            <p>{modalProduct.description}</p>
            <div className="modal-images">
              {modalProduct.images.map((img, index) => (
                <img key={index} src={img} alt={`Variant ${index + 1}`} />
              ))}
            </div>
            <p>and many more! Visit our Store to get deals and discounts!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
