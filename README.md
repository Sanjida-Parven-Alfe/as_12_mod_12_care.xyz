# 🏥 Care.xyz - Trusted Family Care Service Platform

**Care.xyz** is a full-stack web application designed to simplify the process of finding and booking professional care services. Whether it's **Baby Care**, **Elderly Care**, or **Sick Support**, this platform connects users with reliable caregivers through a secure and user-friendly interface.

🌐 **Live Demo:** [Visit Care.xyz](https://care-xyz-199.vercel.app/)

---

## 📸 Project Overview

This project is built using **Next.js (App Router)** and **MongoDB**, focusing on a seamless booking experience. It features secure authentication, dynamic service management, and a user dashboard to track bookings.

---

## ✨ Key Features

- **🔐 Secure Authentication:**
  - User registration and login using **Email/Password** (with Bcrypt hashing).
  - Social Login integration with **Google** (via NextAuth.js).
  
- **🛠 Service Management:**
  - Browse various care services with detailed descriptions and pricing.
  - Dynamic routing for individual service details.

- **📅 Booking System:**
  - Users can easily book services for specific dates.
  - **My Bookings Dashboard:** Users can view their booking history, check status (Pending/Confirmed), and delete/cancel bookings.
  
- **🛡️ Security & Protection:**
  - **Middleware Protection:** Private routes (like Booking Dashboard) are protected and accessible only to logged-in users.
  - **JWT Sessions:** Secure session management using JSON Web Tokens.

- **📱 Responsive Design:**
  - Fully responsive UI built with **Tailwind CSS**, ensuring a great experience on mobile, tablet, and desktop.

---

## 🛠️ Technologies Used

- **Frontend:** Next.js 14, React.js, Tailwind CSS, DaisyUI.
- **Backend:** Next.js API Routes (Serverless).
- **Database:** MongoDB (CRUD Operations).
- **Authentication:** NextAuth.js, Bcrypt.js.
- **Deployment:** Vercel.
