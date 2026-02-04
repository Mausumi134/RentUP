# 🏠 RentUP – Modern PG Rental Platform

**RentUP** is a full-stack web application that revolutionizes the search and management of Paying Guest (PG) accommodations. Built with modern technologies and best practices, it provides a seamless experience for both tenants and PG owners. Developed using the **MERN** stack with **Vite** for lightning-fast performance.

---

## 📁 Project Structure

```
RentUP/
├── README.md
├── backend/                    # Node.js/Express API Server
│   ├── config/
│   │   └── config.env         # Environment variables
│   ├── database/
│   │   └── dbConnection.js    # MongoDB Atlas connection
│   ├── models/
│   │   ├── User.js           # User authentication model
│   │   └── Order.js          # Booking/order model
│   ├── routes/
│   │   ├── loginRoute.js     # JWT authentication
│   │   ├── registerRoute.js  # User registration
│   │   ├── contactRoute.js   # Contact form
│   │   └── paymentRoute.js   # Payment processing
│   ├── error/
│   │   └── error.js          # Error handling middleware
│   ├── package.json
│   └── index.js              # Server entry point
└── frontend/                  # React + Vite Application
    ├── public/
    │   ├── images/           # Property images & assets
    │   ├── favicon.png
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── auth/         # Authentication components
    │   │   ├── landing/      # Landing page
    │   │   ├── dashboard/    # User dashboard
    │   │   ├── search/       # Advanced search & filters
    │   │   ├── property/     # Property details
    │   │   ├── home/         # Home & property listings
    │   │   ├── cart/         # Shopping cart & payment
    │   │   ├── common/       # Shared components
    │   │   └── pages/        # Route management
    │   ├── App.js
    │   ├── main.jsx
    │   └── index.css
    └── package.json
```

---

## 🚀 Features

### 🔐 **Modern Authentication System**
- **Smart Routing**: Landing page for new users, dashboard for logged-in users
- **JWT Authentication**: Secure token-based authentication with bcrypt password hashing
- **Protected Routes**: Role-based access control with automatic redirects
- **Persistent Sessions**: Stay logged in across browser sessions

### 🏘️ **Property Management**
- **Advanced Search**: Location, price range, room type, gender preference filters
- **Property Details**: Comprehensive property pages with image galleries
- **Favorites System**: Save and manage favorite properties
- **Real-time Availability**: Live room availability status

### 👤 **User Dashboard**
- **Profile Management**: User information and statistics
- **Booking History**: Complete order tracking and management
- **Favorites**: Saved properties with quick actions
- **Account Settings**: Notification preferences and account controls

### 💳 **Complete Payment System**
- **Multiple Payment Methods**: Card, UPI, Net Banking, Wallet
- **Secure Processing**: Form validation and secure payment handling
- **Order Management**: Complete booking lifecycle
- **Payment Success**: Confirmation and order tracking

### 🎨 **Modern UI/UX**
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Professional Styling**: Clean, modern interface with smooth animations
- **Fast Performance**: Vite-powered development with optimized builds
- **Accessibility**: WCAG compliant design

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **React Router DOM 6.27.0** - Client-side routing with protected routes
- **Axios 1.7.7** - HTTP client for API communication
- **React Hot Toast 2.4.1** - Beautiful toast notifications
- **React Icons 5.3.0** - Comprehensive icon library
- **React Slick 0.30.2** - Carousel and slider components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.21.1** - Web application framework
- **MongoDB Atlas** - Cloud database with Mongoose ODM 8.8.3
- **JWT Authentication** - JSON Web Tokens for secure auth
- **Bcrypt.js** - Password hashing and security
- **CORS 2.8.5** - Cross-origin resource sharing
- **Validator 13.12.0** - Input validation and sanitization

### Database
- **MongoDB Atlas** - Cloud-hosted MongoDB database
- **Mongoose** - Object Document Mapper with schema validation
- **Indexing** - Optimized queries for better performance

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Mausumi134/RentUP.git
cd RentUP
```

### 2. Backend Setup

```bash
cd backend
npm install
```

**Configure Environment Variables:**

Create/update `backend/config/config.env`:

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
MONGO_URI=mongodb+srv://rentup:YOUR_PASSWORD@cluster0.suxpd0t.mongodb.net/RentUP?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**Start the Backend Server:**

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

**Start the Frontend Development Server:**

```bash
npm run dev
```

---

## 🌐 Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Landing Page**: http://localhost:3000/landing
- **User Dashboard**: http://localhost:3000/dashboard

---

## 🔄 User Flow

### **New Users:**
```
Landing Page → Register/Login → Dashboard → Browse Properties → Book → Manage
```

### **Returning Users:**
```
Auto-redirect to Dashboard → Browse Properties → Book → Manage Bookings
```

### **Authentication Flow:**
- **Logged Out**: Landing page with sign-up/login options
- **Logged In**: Direct access to dashboard and protected features
- **Logout**: Redirect to landing page, clear session data

---

## 🎯 API Endpoints

### Authentication
- `POST /api/v1/register` - User registration with validation
- `POST /api/v1/login` - JWT-based authentication
- `POST /api/v1/contact` - Contact form submission

### Payments
- `POST /api/v1/payment/process` - Process payment with validation
- `GET /api/v1/payment/status/:transactionId` - Payment status check

---

## 🔒 Security Features

- **Password Hashing**: Bcrypt with salt rounds for secure password storage
- **JWT Tokens**: Secure authentication with expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured cross-origin resource sharing
- **Route Protection**: Authentication required for sensitive operations
- **Error Handling**: Secure error messages without data exposure

---

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop**: Full-featured desktop interface
- **Touch Friendly**: Optimized for touch interactions
- **Fast Loading**: Optimized images and lazy loading

---

## 🚀 Performance Optimizations

- **Vite Build System**: Lightning-fast development and builds
- **Code Splitting**: Optimized bundle sizes
- **Image Optimization**: Compressed and responsive images
- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Browser and API response caching
- **Lazy Loading**: Components loaded on demand

---

## 🔧 Development Scripts

### Backend
```bash
npm start          # Production server
npm run dev        # Development with nodemon
```

### Frontend
```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint code checking
```

---

## 🌟 Key Features Highlights

### 🎨 **Modern Landing Page**
- Professional design with hero section
- Feature showcase and statistics
- Call-to-action buttons for conversion
- Responsive layout for all devices

### 🔍 **Advanced Property Search**
- Real-time filtering by location, price, amenities
- Sort by price, rating, distance, newest
- Visual filter indicators and counters
- Expandable filter panel

### 🏠 **Rich Property Details**
- Image gallery with navigation
- Comprehensive property information
- Owner contact and verification
- Availability status and booking options

### 👤 **Complete User Dashboard**
- Profile management and statistics
- Booking history with status tracking
- Favorites management
- Account settings and preferences

### 💳 **Secure Payment System**
- Multiple payment methods support
- Form validation and error handling
- Order confirmation and tracking
- Payment success with details

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Developer

**Mausumi Ghadei**  
- [LinkedIn](https://www.linkedin.com/in/mausumi-ghadei-006466229/)
- [GitHub](https://github.com/Mausumi134/)
- Email: mausumi.ghadei@example.com

---

## 🙏 Acknowledgments

- **MongoDB Atlas** for cloud database hosting
- **Vite** for the amazing build tool
- **React** community for excellent documentation
- **Font Awesome** for beautiful icons
- **All contributors** who helped improve this project

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Mausumi134/RentUP/issues) page
2. Create a new issue with detailed description
3. Contact the developer via LinkedIn or email

---

**⭐ If you found this project helpful, please give it a star!**

