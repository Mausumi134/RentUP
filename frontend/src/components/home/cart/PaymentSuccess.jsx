import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./payment.css";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Get order details from URL params or localStorage
    const orderId = searchParams.get('orderId');
    const transactionId = searchParams.get('transactionId');
    
    if (orderId || transactionId) {
      // In a real app, fetch order details from backend
      const mockOrderDetails = {
        orderId: orderId || `ORDER_${Date.now()}`,
        transactionId: transactionId || `TXN_${Date.now()}`,
        amount: searchParams.get('amount') || '1500',
        status: 'confirmed'
      };
      setOrderDetails(mockOrderDetails);
    }
  }, [searchParams]);

  return (
    <div className="payment-page">
      <div className="payment-container success-container">
        <div className="success-icon">
          <i className="fa-solid fa-check-circle"></i>
        </div>
        
        <h2>Payment Successful!</h2>
        
        <div className="success-message">
          <p>Thank you for your booking. Your payment has been processed successfully.</p>
        </div>

        {orderDetails && (
          <div className="order-details">
            <h3>Order Details</h3>
            <div className="detail-row">
              <span>Order ID:</span>
              <span>{orderDetails.orderId}</span>
            </div>
            <div className="detail-row">
              <span>Transaction ID:</span>
              <span>{orderDetails.transactionId}</span>
            </div>
            <div className="detail-row">
              <span>Amount Paid:</span>
              <span>₹{parseInt(orderDetails.amount).toLocaleString('en-IN')}</span>
            </div>
            <div className="detail-row">
              <span>Status:</span>
              <span className="status-confirmed">{orderDetails.status}</span>
            </div>
          </div>
        )}

        <div className="success-actions">
          <button 
            className="submit-button"
            onClick={() => navigate("/home")}
          >
            Continue Shopping
          </button>
          
          <button 
            className="payment-button"
            onClick={() => navigate("/orders")}
          >
            View My Orders
          </button>
        </div>

        <div className="success-note">
          <p>📧 A confirmation email has been sent to your registered email address.</p>
          <p>📱 You will receive SMS updates about your booking.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;