# 🏠 RentUP – Rental PG Website

**RentUP** is a full-stack web application that simplifies the search and management of Paying Guest (PG) accommodations. It connects tenants with PG owners, providing a smooth and user-friendly experience. Built using the **MERN** stack: **MongoDB**, **Express.js**, **React**, and **Node.js**.

---

## 🚀 Features

- 🏘️ Browse PG listings with detailed information (price, location, amenities, photos)
- 🔍 Filter/search PGs by city, rent, and room type
- 📝 PG owners can add, edit, or delete listings
- 🔐 User authentication & role-based access (Tenant/Owner)
- 💬 Contact form or booking request
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS / CSS Modules** *(based on your choice)*
- **Axios** (for API calls)
- **React Router DOM** (for routing)

### Backend
- **Node.js**
- **Express.js**
- **JWT Authentication**
- **Mongoose** (MongoDB ODM)

### Database
- **MongoDB Atlas**

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Mausumi134/RentUP.git
cd RentUP
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ..
npm install
npm start
```

---

## 🔒 Authentication

- Users can register as either a **tenant** or **PG owner**
- JWT-based login system
- Role-based routes and access control

---

## 📸 Screenshots

*Include some screenshots or a short demo video link here to showcase UI and features.*

---

## ✨ Future Improvements

- Online payment integration
- Booking calendar for owners
- Reviews & ratings for PGs


---

## 🤝 Contributing

Pull requests are welcome! If you have suggestions or find bugs, feel free to open an issue or submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Developed By

**Mausumi Ghadei**  
[LinkedIn](https://www.linkedin.com/in/mausumi-ghadei-006466229/) • [GitHub](https://github.com/Mausumi134/)

---

