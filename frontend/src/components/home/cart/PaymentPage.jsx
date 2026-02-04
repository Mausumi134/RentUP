import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./payment.css";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Card details
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    // UPI details
    upiId: "",
    // Net Banking
    selectedBank: "",
    // Wallet
    selectedWallet: "",
    // Billing details
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items and calculate total
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const items = JSON.parse(savedCartItems);
      setCartItems(items);
      
      const calculatedTotal = items.reduce((sum, item) => {
        const numericPrice = parseFloat(
          item.price
            .replace(/[₹$,]/g, "")
            .replace(/\s*(per night|per day|\/night|\/day).*/i, "")
            .trim()
        );
        return sum + (isNaN(numericPrice) ? 0 : numericPrice * item.quantity);
      }, 0);
      setTotal(calculatedTotal);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateCardNumber = (cardNumber) => {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const processPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Basic validation
      if (!formData.email || !formData.phone) {
        throw new Error("Please fill in email and phone number");
      }
      
      if (!validateEmail(formData.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      if (!validatePhone(formData.phone)) {
        throw new Error("Please enter a valid 10-digit phone number");
      }

      // Payment method specific validation
      switch (paymentMethod) {
        case "Credit/Debit Card":
          if (!formData.cardNumber || !formData.cardHolder || !formData.expiryDate || !formData.cvv) {
            throw new Error("Please fill in all card details");
          }
          if (!validateCardNumber(formData.cardNumber)) {
            throw new Error("Please enter a valid 16-digit card number");
          }
          break;
        case "UPI":
          if (!formData.upiId) {
            throw new Error("Please enter UPI ID");
          }
          if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
            throw new Error("Please enter a valid UPI ID");
          }
          break;
        case "Net Banking":
          if (!formData.selectedBank) {
            throw new Error("Please select a bank");
          }
          break;
        case "Wallet":
          if (!formData.selectedWallet) {
            throw new Error("Please select a wallet");
          }
          break;
        default:
          throw new Error("Please select a payment method");
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create order object
      const order = {
        id: `ORDER_${Date.now()}`,
        items: cartItems,
        total: total,
        paymentMethod: paymentMethod,
        customerDetails: {
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          pincode: formData.pincode
        },
        orderDate: new Date().toISOString(),
        status: "confirmed"
      };

      // Save order to localStorage (in real app, send to backend)
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
      existingOrders.push(order);
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      // Clear cart
      localStorage.removeItem("cartItems");
      
      toast.success("Payment successful! Your booking is confirmed.");
      
      // Redirect to success page with order details
      setTimeout(() => {
        navigate(`/payment-success?orderId=${order.id}&transactionId=${order.id}&amount=${total}`);
      }, 2000);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "Credit/Debit Card":
        return (
          <div className="payment-form">
            <h3>Enter Card Details</h3>
            <input 
              type="text" 
              name="cardNumber"
              placeholder="Card Number (16 digits)" 
              value={formData.cardNumber}
              onChange={handleInputChange}
              maxLength="19"
            />
            <input 
              type="text" 
              name="cardHolder"
              placeholder="Card Holder Name" 
              value={formData.cardHolder}
              onChange={handleInputChange}
            />
            <div className="card-row">
              <input 
                type="text" 
                name="expiryDate"
                placeholder="MM/YY" 
                value={formData.expiryDate}
                onChange={handleInputChange}
                maxLength="5"
              />
              <input 
                type="text" 
                name="cvv"
                placeholder="CVV" 
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength="3"
              />
            </div>
          </div>
        );
      case "UPI":
        return (
          <div className="payment-form">
            <h3>Enter UPI Details</h3>
            <input 
              type="text" 
              name="upiId"
              placeholder="UPI ID (e.g., yourname@paytm)" 
              value={formData.upiId}
              onChange={handleInputChange}
            />
            <div className="upi-apps">
              <p>Popular UPI Apps:</p>
              <div className="upi-icons">
                <span>📱 PhonePe</span>
                <span>💰 Paytm</span>
                <span>🏦 Google Pay</span>
                <span>💳 BHIM</span>
              </div>
            </div>
          </div>
        );
      case "Net Banking":
        return (
          <div className="payment-form">
            <h3>Select Your Bank</h3>
            <select 
              name="selectedBank"
              value={formData.selectedBank}
              onChange={handleInputChange}
            >
              <option value="">Choose Bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="AXIS">Axis Bank</option>
              <option value="PNB">Punjab National Bank</option>
              <option value="BOI">Bank of India</option>
              <option value="CANARA">Canara Bank</option>
            </select>
          </div>
        );
      case "Wallet":
        return (
          <div className="payment-form">
            <h3>Select Wallet</h3>
            <select 
              name="selectedWallet"
              value={formData.selectedWallet}
              onChange={handleInputChange}
            >
              <option value="">Choose Wallet</option>
              <option value="Paytm">Paytm Wallet</option>
              <option value="PhonePe">PhonePe Wallet</option>
              <option value="Amazon">Amazon Pay</option>
              <option value="Mobikwik">MobiKwik</option>
              <option value="Freecharge">FreeCharge</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <h2>No Items to Pay</h2>
          <p>Your cart is empty. Please add items before proceeding to payment.</p>
          <button 
            className="payment-button"
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Complete Your Payment</h2>
        
        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <span>{item.title} x {item.quantity}</span>
                <span>₹{(parseFloat(item.price.replace(/[₹$,]/g, "").replace(/\s*(per night|per day|\/night|\/day).*/i, "").trim()) * item.quantity).toLocaleString('en-IN')}</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <strong>Total: ₹{total.toLocaleString('en-IN')}</strong>
          </div>
        </div>

        {/* Billing Details */}
        <div className="billing-details">
          <h3>Billing Details</h3>
          <input 
            type="email" 
            name="email"
            placeholder="Email Address *" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number *" 
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="address"
            placeholder="Address" 
            value={formData.address}
            onChange={handleInputChange}
          />
          <div className="address-row">
            <input 
              type="text" 
              name="city"
              placeholder="City" 
              value={formData.city}
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="pincode"
              placeholder="Pincode" 
              value={formData.pincode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          
          <button
            className={`payment-button ${paymentMethod === "Credit/Debit Card" ? "active" : ""}`}
            onClick={() => setPaymentMethod("Credit/Debit Card")}
          >
            💳 Credit/Debit Card
          </button>

          <button
            className={`payment-button ${paymentMethod === "UPI" ? "active" : ""}`}
            onClick={() => setPaymentMethod("UPI")}
          >
            📱 UPI
          </button>

          <button
            className={`payment-button ${paymentMethod === "Net Banking" ? "active" : ""}`}
            onClick={() => setPaymentMethod("Net Banking")}
          >
            🏦 Net Banking
          </button>

          <button
            className={`payment-button ${paymentMethod === "Wallet" ? "active" : ""}`}
            onClick={() => setPaymentMethod("Wallet")}
          >
            💰 Wallet
          </button>
        </div>

        {renderPaymentForm()}

        {paymentMethod && (
          <button 
            className={`submit-button ${isProcessing ? "processing" : ""}`}
            onClick={processPayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay ₹${total.toLocaleString('en-IN')}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
