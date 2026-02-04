// Order.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: String,
    price: String,
    location: String,
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const customerDetailsSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    address: String,
    city: String,
    pincode: String
});

const paymentDetailsSchema = new Schema({
    method: {
        type: String,
        required: true,
        enum: ['Credit/Debit Card', 'UPI', 'Net Banking', 'Wallet']
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    // For card payments (never store full card numbers)
    cardLast4: String,
    cardHolder: String,
    // For UPI payments
    upiId: String,
    // For net banking
    bank: String,
    // For wallet payments
    wallet: String
});

const orderSchema = new Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    items: [orderItemSchema],
    customerDetails: customerDetailsSchema,
    paymentDetails: paymentDetailsSchema,
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Create indexes for better query performance
orderSchema.index({ orderId: 1 });
orderSchema.index({ 'customerDetails.email': 1 });
orderSchema.index({ 'paymentDetails.transactionId': 1 });
orderSchema.index({ orderDate: -1 });

const Order = mongoose.model('Order', orderSchema);

export default Order;