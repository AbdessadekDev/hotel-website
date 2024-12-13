# Hotel Website Project

This project is a full-stack hotel website designed to demonstrate portfolio-worthy skills in modern web development. It includes a dynamic frontend built with React.js and TypeScript, a scalable backend powered by Node.js and MongoDB, and follows best practices for code structure and security.

---

## **Features**

### **Frontend**
- Responsive design with modern UI.
- Room search and availability check.
- Booking form with validation.
- User authentication for booking management.
- Admin panel for managing rooms and bookings.

### **Backend**
- RESTful API for managing users, rooms, and bookings.
- JWT-based authentication.
- Secure password storage using bcrypt.
- Scalable database structure with MongoDB.
- Role-based access control (admin vs. user).

---

## **Tech Stack**

### **Frontend**
- React.js
- TypeScript
- Tailwind CSS (for styling)

### **Backend**
- Node.js
- Express.js
- TypeScript
- MongoDB (via Mongoose)

### **Development Tools**
- Nodemon for development server
- TSX for running TypeScript files
- ESLint and Prettier for code quality

---

## **Getting Started**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud)
- Package manager (npm or pnpm)

### **Setup Instructions**

#### **Clone the Repository**
```bash
git clone https://github.com/AbdessadekDev/hotel-website.git
cd hotel-website
```

#### **Install Dependencies**

1. **Backend:**
   ```bash
   cd server
   npm install
   ```

2. **Frontend:**
   ```bash
   cd client
   pnpm install
   ```

#### **Environment Variables**
Create `.env` files in both the `server` and `client` directories.

**Backend `.env` Example:**
```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/hotelDB
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1d
```

**Frontend `.env` Example:**
```
VITE_APP_API_URL=http://localhost:5000/api
```

#### **Run the Project**

1. **Backend:**
   ```bash
   cd server
   npm run dev
   ```

2. **Frontend:**
   ```bash
   cd client
   pnpm run dev
   ```

The app will be accessible at `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend.

---

## **Project Structure**

### **Backend**
```
src/
├── config/            # Database and environment setup
├── controllers/       # Route handlers
├── middlewares/       # Authentication, error handling
├── models/            # Mongoose schemas
├── routes/            # API routes
├── utils/             # Helper functions
├── app.ts             # Main server file
└── server.ts          # Server initialization
```

### **Frontend**
```
src/
├── components/        # Reusable UI components
├── pages/             # Page components (e.g., Home, Rooms, Booking)
├── hooks/             # Custom React hooks
├── contexts/          # Context API for state management
├── services/          # API calls
├── utils/             # Helper functions
├── styles/            # CSS/SCSS modules or Tailwind classes
└── App.tsx            # Main component
```

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contact**
For any questions or collaboration opportunities, feel free to reach out:
- Email: abdessadeksbaai@gmail.com
- LinkedIn: [Abdessadek sbaai](https://linkedin.com/in/abdessadek-sbaai)
