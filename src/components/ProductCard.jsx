import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import toast from 'react-hot-toast';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants ? product.variants[0] : null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product.available) return;
    
    const productToAdd = selectedVariant 
      ? { ...product, selectedVariant } 
      : product;
      
    dispatch(addCart(productToAdd));
    toast.success('Added to cart');
  };

  const handleVariantChange = (e) => {
    const selected = product.variants.find(v => v.id === e.target.value);
    setSelectedVariant(selected);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image" 
        />
        {!product.available && (
          <div className="out-of-stock-overlay">
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        {product.variants && product.variants.length > 0 && (
          <div className="product-variants">
            <select 
              onChange={handleVariantChange} 
              value={selectedVariant?.id}
              disabled={!product.available}
            >
              {product.variants.map(variant => (
                <option key={variant.id} value={variant.id}>
                  {variant.name}
                </option>
              ))}
            </select>
          </div>
        )}
        
        <button 
          className={`add-to-cart-button ${!product.available ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={!product.available}
        >
          {product.available ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;