# **Rental PG Website**

This project is a full-stack rental PG website named **RentHub**. It allows users to search for rental PGs, filter results based on their criteria, book accommodations, and make secure payments. Users will also receive a confirmation email upon booking, with tracking details to monitor their reservation status.

## **Features**
- Search for PG accommodations based on location, budget, and amenities.
- Apply filters for criteria such as room type, gender-specific PGs, etc.
- Secure booking system.
- Integrated payment gateway for seamless transactions.
- Email confirmation with tracking details.

## **Technologies Used**
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: Nodemailer

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed:
1. **Node.js**: [Download and install Node.js](https://nodejs.org)
2. **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community)
3. **npm**: Comes with Node.js

---

## **Setup Instructions**

### **1. Set Up MongoDB**
1. Install MongoDB and ensure it is running on your local machine or use a cloud-based MongoDB service like Atlas.
2. Create a database named **`Renthub`**.

### **2. Clone the Repository**
```bash
git clone <repository_url>
cd RentHub
```

### **3. Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables by creating a `.env` file:
   ```env
   MONGO_URI=your-mongo-uri
   fromMail=your-email@gmail.com
   PASS=your-email-password
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Ensure the backend server is running on the specified port (e.g., `http://localhost:5000`).

### **4. Frontend Setup**
1. Navigate back to the root directory:
   ```bash
   cd ..
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
4. The frontend will run at `http://localhost:3000`.

---

## **Usage**
1. Open your browser and go to `http://localhost:3000`.
2. Use the search and filter options to browse rental PGs.
3. Select a PG, book it, and proceed to payment.
4. After a successful booking, you will receive a confirmation email with your booking details and a tracking link.
5. Click on the tracking link to monitor the status of your reservation.

---


## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push the branch.
4. Submit a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---




