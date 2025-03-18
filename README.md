# **Rental PG Website**

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
cd RentUP
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

# Lead Management System Dashboard

A simple and responsive lead management system built with React and Material-UI. This application allows users to manage leads, analyze sentiment from user feedback, and visualize user data through various charts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **User Management**: Add, view, and manage leads with detailed information.
- **Sentiment Analysis**: Analyze user feedback to determine sentiment scores.
- **Data Visualization**: Display user data through various charts, including:
  - Sentiment score distribution (high, medium, low).
  - User login status (logged in vs. logged out).
- **Responsive Design**: Works well on both desktop and mobile devices.
- **User-Friendly Interface**: Built with Material-UI for a modern look and feel.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Material-UI](https://mui.com/) - A popular React UI framework.
  - [Chart.js](https://www.chartjs.org/) - A library for creating charts.
  - [Sentiment](https://www.npmjs.com/package/sentiment) - A library for sentiment analysis.
  - [Vite](https://vitejs.dev/) - A fast development server and build tool.

## Installation

1. **Clone the repository**:
   bash
   git clone https://github.com/yourusername/lead-management.git
   cd lead-management
   

2. **Install the dependencies**:
   bash
   npm install
   

3. **Start the development server**:
   bash
   npm run dev
   

4. **Open your browser** and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Usage

- **Adding Leads**: Click on the "Add Lead" button in the header to open the lead form. Fill in the details and submit to add a new lead.
- **Viewing Leads**: The dashboard displays all leads with their sentiment scores and other relevant information.
- **Data Visualization**: The dashboard includes charts that visualize user sentiment categories and login status.

## Screenshots
[Dashboard UI](https://github.com/Mausumi134/RentUP/blob/main/dashboard.pdf)

This project is a full-stack rental PG website named **RentHub**. It allows users to search for rental PGs, filter results based on their criteria, book accommodations, and make secure payments. Users will also receive a confirmation email upon booking, with tracking details to monitor their reservation status.

![p1](https://github.com/user-attachments/assets/32bd9727-3d00-454f-81d0-55947c01e10d)

![p](https://github.com/user-attachments/assets/3dad809d-4807-4a06-ab15-742a0fa1f417)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of React, Material-UI, and Chart.js for their amazing libraries.
- Special thanks to the contributors of the sentiment analysis library.
- Inspiration from various open-source projects and tutorials.



### Notes:
- Replace https://github.com/yourusername/lead-management.git with the actual URL of your GitHub repository.
- You can add actual screenshots of your application in the "Screenshots" section by replacing the placeholder URLs with the links to your images.
- Feel free to customize any section to better fit your project's specifics or to add any additional information you think is necessary.

If you need further modifications or additional sections, just let me know!

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




