# Amrutam Pharmaceuticals - E-commerce Frontend

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive e-commerce web application for Amrutam Pharmaceuticals, featuring an intuitive shop interface and interactive forum for Ayurvedic health discussions. Built with React.js and styled with Tailwind CSS, this project delivers a seamless user experience across all devices.

## 🚀 Live Demo

<!-- Add your deployment URL here -->
[View Live Demo](https://your-deployment-url.com)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Pages & Components](#-pages--components)
- [Routing](#-routing)
- [Responsive Design](#-responsive-design)
- [Development Scripts](#-development-scripts)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🛍️ E-commerce Shop
- **Product Catalog**: Browse Ayurvedic products with detailed information
- **Product Details**: Comprehensive product pages with:
  - High-quality product images with gallery
  - Size/variant selection
  - Quantity adjustment
  - Add to cart functionality
  - Product highlights and benefits
  - Key ingredients with detailed descriptions
  - Usage instructions and general guidelines
  - Customer reviews and ratings
  - FAQ section with common questions
- **Category Navigation**: Filter products by health categories
- **Search Functionality**: Find products quickly with search
- **Product Collections**: Featured summer collections and recommendations
- **Expert Consultation**: Meet our Ayurveda experts section

### 💬 Interactive Forum
- **Q&A Platform**: Ask and answer Ayurveda-related questions
- **User Engagement**: Like, comment, and save posts
- **Expert Responses**: Verified doctor responses to user queries
- **Content Filtering**: Sort by recent, most liked, most commented
- **User Profiles**: Display user information and post history
- **Search**: Find specific topics and discussions

### 📱 Mobile App Promotion
- **App Benefits**: Highlight mobile app advantages
- **Download Links**: Direct links to Play Store and App Store
- **Feature Showcase**: Interactive elements showing app benefits

### 🎨 UI/UX Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Screen reader friendly and keyboard navigation
- **Loading States**: Proper loading indicators
- **Error Handling**: User-friendly error messages

## �️ Tech Stack

### Frontend Framework
- **React.js 19.1.0** - Core framework for building the UI
- **React Router DOM 7.7.1** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for rapid styling
- **Custom CSS** - Additional styling with Google Fonts (Inter, Oswald)

### Icons & Assets
- **Lucide React 0.534.0** - Modern icon library
- **React Icons 5.5.0** - Popular icon library with extensive icon sets

### Build Tools
- **Vite 7.0.4** - Fast build tool and development server
- **ESLint 9.30.1** - Code linting and quality assurance

### Development Tools
- **@vitejs/plugin-react** - Vite plugin for React support
- **ESLint plugins** - React hooks and React refresh plugins

## 📁 Project Structure

```
amrutam-pharmaceuticals/
├── public/
│   ├── assets/
│   │   ├── admin-logo.svg
│   │   ├── all-icon.png
│   │   ├── appstore.png
│   │   ├── playstore.png
│   │   ├── doctorImg.svg
│   │   ├── header-bg.png
│   │   ├── summerCollectionImg1-3.png
│   │   └── ... (other assets)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Category.jsx          # Product categories navigation
│   │   ├── DoctorCard.jsx        # Expert doctor profile cards
│   │   ├── Footer.jsx            # Site footer with links and social
│   │   ├── Forum.jsx             # Main forum page component
│   │   ├── ForumUserFeedback.jsx # Forum post and reply components
│   │   ├── Header.jsx            # Site header with navigation
│   │   ├── IngredientDetails.jsx # Individual ingredient information
│   │   ├── InstantFreeCall.jsx   # Call-to-action banner
│   │   ├── MeetOurExperts.jsx    # Expert doctors section
│   │   ├── MobileAppPromo.jsx    # App download promotion
│   │   ├── Navbar.jsx            # Main navigation component
│   │   ├── ProductDetail.jsx     # Detailed product view
│   │   ├── ProductHighlight.jsx  # Product benefits and usage
│   │   ├── productData.js        # Mock product data
│   │   ├── Rating.jsx            # Product reviews and ratings
│   │   └── SummerCollection.jsx  # Product collection showcase
│   ├── App.jsx                   # Main app component with routing
│   ├── index.css                 # Global styles and Tailwind imports
│   └── main.jsx                  # React app entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
└── vite.config.js               # Vite configuration
```

## 🚀 Installation

### Prerequisites
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager

### Step-by-step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ShubhamSingh-28/Amrutam-pharmaceuticals_internShip.git
   cd AmrutamPharmaceuticals_Internship_assignment-main
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` to view the application

## 💻 Usage

### Development Mode
```bash
npm run dev          # Start development server with hot reload
```

### Production Build
```bash
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint for code quality checks
```

## 📄 Pages & Components

### 🏠 Homepage (`/`)
- **Header**: Navigation, search, and cart
- **Category Section**: Health category filters
- **Summer Collection**: Featured product showcase (appears twice)
- **Mobile App Promo**: App download section
- **Footer**: Links, contact info, and newsletter signup

### �️ Product Detail (`/product/:id`)
- **Product Gallery**: Multiple product images
- **Product Info**: Title, price, ratings, size selection
- **Add to Cart**: Quantity selector and cart functionality
- **Product Highlights**: Key benefits and features
- **Ingredients**: Detailed ingredient information with links
- **Usage Instructions**: How to use the product
- **FAQ Section**: Common questions and answers
- **Reviews**: Customer feedback and ratings
- **Related Products**: "People also bought" recommendations
- **Expert Consultation**: Doctor recommendation section

### 🧪 Ingredient Detail (`/ingredient/:name`)
- **Ingredient Info**: Detailed ingredient description
- **Products**: List of products containing the ingredient
- **Benefits**: Health benefits and usage information

### 💬 Forum (`/forum`)
- **Question/Thought Tabs**: Toggle between content types
- **Search & Filter**: Find and sort discussions
- **User Posts**: Questions with expert answers
- **Engagement**: Like, comment, and save functionality
- **Load More**: Pagination for additional content

### 🔧 Reusable Components

#### `DoctorCard`
- Doctor profile with image, credentials, and booking
- Rating display and specialization tags

#### `SummerCollection`
- Product grid with hover effects
- Star ratings and add-to-cart buttons
- Responsive product cards

#### `Rating`
- Customer review display
- Rating statistics and review submission

#### `ForumUserFeedback`
- Forum post with user info and engagement metrics
- Nested replies and doctor responses

## �️ Routing

The application uses React Router for navigation:

```javascript
Routes:
├── /                    # Homepage (Shop)
├── /product/:id         # Product Detail Page
├── /ingredient/:name    # Ingredient Information
└── /forum              # Community Forum
```

### Route Parameters
- `:id` - Product ID for product details
- `:name` - Ingredient name for ingredient information

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 768px (md)
- **Laptop**: 768px - 1024px (lg)
- **Desktop**: > 1024px (xl)

### Responsive Features
- **Flexible Grid Layouts**: Adapts to screen size
- **Mobile-First Navigation**: Hamburger menu for mobile
- **Optimized Images**: Responsive image sizing
- **Touch-Friendly Buttons**: Appropriate sizing for mobile
- **Readable Typography**: Scalable text across devices

## 🎨 Styling

### Color Palette
- **Primary Green**: `#3A653A` - Main brand color
- **Background**: `#FFF7E2` - Warm background
- **Accent**: `#32653F` - Text and accent elements
- **Highlight**: `#FFE7CA` - Cards and highlights
- **Rating**: `#F79725` - Star ratings

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Secondary Font**: Oswald (Google Fonts)
- **Font Weights**: 200-900 range

### Design System
- **Consistent Spacing**: Tailwind's spacing scale
- **Rounded Corners**: Consistent border radius
- **Shadow Layers**: Subtle elevation effects
- **Hover States**: Interactive feedback

## 🔧 Development Scripts

```json
{
  "dev": "vite",              // Start development server
  "build": "vite build",      // Build for production
  "lint": "eslint .",         // Run linter
  "preview": "vite preview"   // Preview production build
}
```

## 🧪 Testing

While not currently implemented, recommended testing setup:

- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Cypress or Playwright
- **Component Tests**: Storybook

## 🚀 Deployment

### Recommended Platforms
- **Vercel** - Optimized for React/Vite apps
- **Netlify** - Simple deployment with git integration
- **GitHub Pages** - Free hosting for open source projects

### Build Process
```bash
npm run build        # Creates 'dist' folder with optimized assets
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Your Name](https://github.com/yourusername)
- **Design**: Based on Figma design specifications
- **Company**: Amrutam Pharmaceuticals

## 📞 Support

For support and questions:
- **Email**: support@amrutam.global
- **Phone**: +91 9713171999
- **Address**: Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Shopping cart persistence
- [ ] Payment gateway integration
- [ ] Real-time chat support
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] Product recommendations AI

---

**Made with ❤️ for Amrutam Pharmaceuticals Internship Assignment** 
