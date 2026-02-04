import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./propertyDetails.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  // Mock property data (in real app, fetch from API)
  const mockProperty = {
    id: 1,
    title: "Premium PG for Boys",
    description: "Spacious and well-furnished PG accommodation with all modern amenities. Located in the heart of the city with easy access to colleges and offices.",
    images: [
      "../images/list/p-1.jpg",
      "../images/list/p-2.jpg",
      "../images/list/p-3.jpg",
      "../images/list/p-4.jpg"
    ],
    price: "₹8,500",
    location: "Phagwara, Punjab",
    address: "123, Model Town, Near LPU, Phagwara - 144411",
    type: "Boys PG",
    roomTypes: ["Single", "Double Sharing", "Triple Sharing"],
    amenities: [
      "WiFi", "AC", "Food", "Laundry", "Parking", "Security", 
      "Power Backup", "Water Supply", "Common Area", "Study Room"
    ],
    rules: [
      "No smoking inside premises",
      "Visitors allowed till 9 PM",
      "Maintain cleanliness",
      "No loud music after 10 PM"
    ],
    owner: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@example.com",
      verified: true
    },
    rating: 4.5,
    reviews: 23,
    availability: {
      single: 2,
      double: 1,
      triple: 0
    },
    nearbyPlaces: [
      { name: "LPU University", distance: "0.5 km", type: "education" },
      { name: "City Mall", distance: "1.2 km", type: "shopping" },
      { name: "Bus Stand", distance: "0.8 km", type: "transport" },
      { name: "Hospital", distance: "1.5 km", type: "medical" }
    ]
  };

  useEffect(() => {
    // In real app, fetch property by ID
    setProperty(mockProperty);
    
    // Check if property is in favorites
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some(fav => fav.id === parseInt(id)));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== property.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      toast.success("Removed from favorites");
    } else {
      const newFavorite = {
        id: property.id,
        title: property.title,
        image: property.images[0],
        price: property.price,
        location: property.location
      };
      favorites.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      toast.success("Added to favorites");
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const existingItem = cartItems.find(item => item.id === property.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: property.id,
        title: property.title,
        image: property.images[0],
        price: property.price,
        location: property.location,
        quantity: 1
      });
    }
    
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    toast.success("Added to cart");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In real app, send contact form to backend
    toast.success("Message sent successfully! Owner will contact you soon.");
    setShowContactForm(false);
    setContactForm({ name: "", phone: "", email: "", message: "" });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  if (!property) {
    return <div className="property-loading">Loading...</div>;
  }

  return (
    <div className="property-details-container">
      {/* Image Gallery */}
      <div className="image-gallery">
        <div className="main-image">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.title}
          />
          <button className="nav-btn prev" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="nav-btn next" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="image-counter">
            {currentImageIndex + 1} / {property.images.length}
          </div>
        </div>
        <div className="thumbnail-strip">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${property.title} ${index + 1}`}
              className={index === currentImageIndex ? "active" : ""}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="property-content">
        {/* Property Header */}
        <div className="property-header">
          <div className="property-title-section">
            <h1>{property.title}</h1>
            <div className="property-meta">
              <span className="location">
                <i className="fa-solid fa-location-dot"></i>
                {property.location}
              </span>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                {property.rating} ({property.reviews} reviews)
              </div>
            </div>
          </div>
          <div className="property-actions">
            <button 
              className={`favorite-btn ${isFavorite ? "active" : ""}`}
              onClick={toggleFavorite}
            >
              <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
            </button>
            <div className="price-tag">
              {property.price} <span>per month</span>
            </div>
          </div>
        </div>

        {/* Property Info Grid */}
        <div className="property-info-grid">
          {/* Description */}
          <div className="info-section">
            <h3>Description</h3>
            <p>{property.description}</p>
          </div>

          {/* Room Types & Availability */}
          <div className="info-section">
            <h3>Room Types & Availability</h3>
            <div className="room-types">
              {property.roomTypes.map((type, index) => (
                <div key={index} className="room-type">
                  <span className="type-name">{type}</span>
                  <span className={`availability ${property.availability[type.toLowerCase().replace(' sharing', '')] > 0 ? 'available' : 'unavailable'}`}>
                    {property.availability[type.toLowerCase().replace(' sharing', '')] > 0 
                      ? `${property.availability[type.toLowerCase().replace(' sharing', '')]} available`
                      : 'Not available'
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="info-section">
            <h3>Amenities</h3>
            <div className="amenities-grid">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="amenity-item">
                  <i className="fa-solid fa-check"></i>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div className="info-section">
            <h3>House Rules</h3>
            <ul className="rules-list">
              {property.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Location & Nearby */}
          <div className="info-section">
            <h3>Location & Nearby Places</h3>
            <div className="address">
              <i className="fa-solid fa-map-marker-alt"></i>
              {property.address}
            </div>
            <div className="nearby-places">
              {property.nearbyPlaces.map((place, index) => (
                <div key={index} className="nearby-item">
                  <span className="place-name">{place.name}</span>
                  <span className="distance">{place.distance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Info */}
          <div className="info-section">
            <h3>Owner Information</h3>
            <div className="owner-card">
              <div className="owner-avatar">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="owner-details">
                <h4>
                  {property.owner.name}
                  {property.owner.verified && (
                    <i className="fa-solid fa-badge-check verified"></i>
                  )}
                </h4>
                <p>{property.owner.phone}</p>
                <p>{property.owner.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="contact-btn" onClick={() => setShowContactForm(true)}>
            <i className="fa-solid fa-message"></i>
            Contact Owner
          </button>
          <button className="cart-btn" onClick={addToCart}>
            <i className="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>
          <button className="book-btn" onClick={() => navigate("/payment")}>
            <i className="fa-solid fa-calendar-check"></i>
            Book Now
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contact Owner</h3>
              <button 
                className="close-btn"
                onClick={() => setShowContactForm(false)}
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={contactForm.phone}
                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                required
              ></textarea>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;