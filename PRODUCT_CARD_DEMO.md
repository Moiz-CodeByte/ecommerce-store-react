# Product Card UI Component Demo

## Overview
This demo showcases a responsive Product Card UI component that can be used on e-commerce product listing pages. The component includes all the required features and follows modern UI/UX best practices.

## Features
- Product image with hover effects
- Product name with text overflow handling
- Product price display
- Variant selection dropdown
- "Add to Cart" button with proper state handling
- "Out of Stock" state when product is unavailable
- Fully responsive design for all screen sizes

## How to Run the Project

### Prerequisites
- Node.js and npm installed

### Installation
1. Install dependencies with the legacy peer dependencies flag to resolve React version conflicts:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Access the demo at:
   ```
   http://localhost:3000/product-card-demo
   ```

## Implementation Notes

### Layout Approach
The product cards use a responsive flexbox layout with a fixed aspect ratio for images to maintain consistent sizing across different screen sizes. Each card has hover effects for better user interaction.

### Responsiveness Considerations
The grid system adjusts from 4 columns on large screens to 2 columns on small screens and 1 column on extra-small screens. Font sizes and padding are reduced on smaller screens to optimize the mobile experience.

## Component Structure

- **ProductCard.jsx**: The main component that renders the product card
- **ProductCard.css**: Styling for the component
- **ProductCardDemo.jsx**: A demo page that showcases the component with sample data

## Sample Data
The demo uses sample product data with variants to demonstrate all features of the component, including:
- Products with multiple variants
- Products that are out of stock
- Products with different images and prices