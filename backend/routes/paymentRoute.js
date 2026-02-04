// routes/paymentRoute.js

import express from "express";

const router = express.Router();

// Process payment
router.post("/process", async (req, res) => {
  try {
    const {
      paymentMethod,
      amount,
      customerDetails,
      cartItems,
      paymentDetails
    } = req.body;

    // Basic validation
    if (!paymentMethod || !amount || !customerDetails) {
      throw new Error("Missing required payment information");
    }

    if (!customerDetails.email || !customerDetails.phone) {
      throw new Error("Customer email and phone are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerDetails.email)) {
      throw new Error("Invalid email format");
    }

    // Validate phone format (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(customerDetails.phone)) {
      throw new Error("Invalid phone number format");
    }

    // Payment method specific validation
    switch (paymentMethod) {
      case "Credit/Debit Card":
        if (!paymentDetails.cardNumber || !paymentDetails.cardHolder || 
            !paymentDetails.expiryDate || !paymentDetails.cvv) {
          throw new Error("Incomplete card details");
        }
        // Validate card number (basic check for 16 digits)
        const cardNumber = paymentDetails.cardNumber.replace(/\s/g, '');
        if (!/^\d{16}$/.test(cardNumber)) {
          throw new Error("Invalid card number");
        }
        break;
      
      case "UPI":
        if (!paymentDetails.upiId) {
          throw new Error("UPI ID is required");
        }
        if (!/^[\w.-]+@[\w.-]+$/.test(paymentDetails.upiId)) {
          throw new Error("Invalid UPI ID format");
        }
        break;
      
      case "Net Banking":
        if (!paymentDetails.selectedBank) {
          throw new Error("Please select a bank");
        }
        break;
      
      case "Wallet":
        if (!paymentDetails.selectedWallet) {
          throw new Error("Please select a wallet");
        }
        break;
      
      default:
        throw new Error("Invalid payment method");
    }

    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate transaction ID
    const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create payment record
    const paymentRecord = {
      transactionId,
      paymentMethod,
      amount,
      customerDetails,
      cartItems,
      paymentDetails: {
        // Store only safe details (never store full card numbers in real apps)
        method: paymentMethod,
        ...(paymentMethod === "Credit/Debit Card" && {
          cardLast4: paymentDetails.cardNumber.slice(-4),
          cardHolder: paymentDetails.cardHolder
        }),
        ...(paymentMethod === "UPI" && {
          upiId: paymentDetails.upiId
        }),
        ...(paymentMethod === "Net Banking" && {
          bank: paymentDetails.selectedBank
        }),
        ...(paymentMethod === "Wallet" && {
          wallet: paymentDetails.selectedWallet
        })
      },
      status: "success",
      timestamp: new Date().toISOString()
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Update inventory
    // 4. Integrate with actual payment gateway

    res.status(200).json({
      success: true,
      message: "Payment processed successfully",
      transactionId,
      paymentRecord
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Get payment status
router.get("/status/:transactionId", async (req, res) => {
  try {
    const { transactionId } = req.params;

    // In a real app, fetch from database
    // For now, simulate a successful payment
    const paymentStatus = {
      transactionId,
      status: "success",
      amount: 1500,
      timestamp: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      paymentStatus
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;