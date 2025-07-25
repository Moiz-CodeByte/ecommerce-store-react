import React from 'react';
import { ProductCard, Navbar, Footer } from '../components';
import { Provider } from 'react-redux';
import store from '../redux/store';

const ProductCardDemo = () => {
  // Sample product data with variants
  const sampleProducts = [
    {
      id: 1,
      title: 'Premium Cotton T-Shirt',
      price: 29.99,
      description: 'High-quality cotton t-shirt with a comfortable fit.',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      available: true,
      variants: [
        { id: 'v1', name: 'Small', sku: 'TS-S-BLK' },
        { id: 'v2', name: 'Medium', sku: 'TS-M-BLK' },
        { id: 'v3', name: 'Large', sku: 'TS-L-BLK' },
        { id: 'v4', name: 'X-Large', sku: 'TS-XL-BLK' }
      ]
    },
    {
      id: 2,
      title: 'Slim Fit Jeans',
      price: 49.99,
      description: 'Modern slim fit jeans with stretch comfort.',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      available: true,
      variants: [
        { id: 'v5', name: '30x30', sku: 'JN-30-30' },
        { id: 'v6', name: '32x30', sku: 'JN-32-30' },
        { id: 'v7', name: '34x32', sku: 'JN-34-32' }
      ]
    },
    {
      id: 3,
      title: 'Wireless Headphones',
      price: 99.99,
      description: 'Noise-cancelling wireless headphones with 20-hour battery life.',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      available: false,
      variants: [
        { id: 'v8', name: 'Black', sku: 'HP-BLK' },
        { id: 'v9', name: 'White', sku: 'HP-WHT' }
      ]
    },
    {
      id: 4,
      title: 'Leather Wallet',
      price: 39.99,
      description: 'Genuine leather wallet with multiple card slots.',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      available: true,
      variants: [
        { id: 'v10', name: 'Brown', sku: 'WL-BRN' },
        { id: 'v11', name: 'Black', sku: 'WL-BLK' }
      ]
    }
  ];

  return (
    <Provider store={store}>
      <>
        <Navbar />
        <div className="container my-5">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-5">Product Card Demo</h1>
            <p className="lead text-muted">
              A responsive product card component with variant selection and stock status
            </p>
            <hr className="my-4" />
          </div>
        </div>

        <div className="row">
          {sampleProducts.map(product => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-8 mx-auto">
            <div className="card p-4 bg-light">
              <h3>Implementation Notes</h3>
              <p>
                <strong>Layout Approach:</strong> The product cards use a responsive flexbox layout with a fixed aspect ratio for images to maintain consistent sizing across different screen sizes. Each card has hover effects for better user interaction.
              </p>
              <p>
                <strong>Responsiveness:</strong> The grid system adjusts from 4 columns on large screens to 2 columns on small screens and 1 column on extra-small screens. Font sizes and padding are reduced on smaller screens to optimize the mobile experience.
              </p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </>
    </Provider>
  );
};

export default ProductCardDemo;