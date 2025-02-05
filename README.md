
# Crowdcube: A Crowd Funding Application

Crowdcube is a comprehensive crowdfunding platform designed to facilitate fundraising for various campaigns, including personal needs, startups, creative ideas, and more. This project adheres to a robust feature set and modern development practices.

## Features

1. **User-Friendly Navigation**
   - A responsive navbar with options for Home, All Campaigns, Add New Campaign, My Campaigns, My Donations, and Authentication.
   - Conditional rendering for Login/Register or User Profile and Logout.

2. **Dynamic Campaign Management**
   - Display active campaigns with "See More" options.
   - Add, update, and delete campaigns with secure user access.
   - Support for sorting campaigns by minimum donation amount.

3. **Interactive Design**
   - Responsive design for mobile, tablet, and desktop views.
   - Integration of animations using Lottie React and React Awesome Reveal.
   - Dark/light theme toggle for enhanced user experience.

4. **Authentication System**
   - Email and password-based authentication.
   - Google login option for quick access.
   - Validation for strong passwords and error handling via toast notifications.

5. **Robust Data Handling**
   - MongoDB for storing campaigns and donation data.
   - Firebase for secure authentication.
   - Environment variables to hide sensitive credentials.

## Pages and Routes

### Home Page
- Banner with a carousel of meaningful information.
- Running Campaigns Section showing 6 active campaigns fetched from the database.
- Additional meaningful sections to engage users.

### Campaign Management
- **Add New Campaign**: Private route with a form to create campaigns.
- **All Campaigns**: List of all campaigns with sorting functionality.
- **My Campaigns**: Displays only the logged-in user’s campaigns.
- **Update Campaign**: Edit campaign details via a form or modal.
- **Delete Campaign**: Secure deletion with confirmation prompts.

### Donations
- **My Donations**: View campaigns the user has contributed to in a card layout.
- **Donate Button**: Add campaign donations to the database (if deadline permits).

### Authentication
- Login and Register pages with secure validations.
- Conditional redirects for private routes.

### Other Features
- Custom 404 page for undefined routes.
- Loading spinner for data fetch operations.
- Toast notifications for success and error messages.

## Deployment

- **Client Side**: Hosted on [Netlify/Surge/Firebase].
- **Server Side**: Hosted on Vercel.

## Live Site URL
[https://crowdfunding-6ef9b.web.app](https://crowdfunding-6ef9b.web.app)

---

## How to Run Locally

### Prerequisites

Before running the project locally, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (Latest LTS version recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (For local database setup or use MongoDB Atlas)
- A Firebase Project (For authentication)

---

### Step-by-Step Guide

### 1️⃣ Clone the Repository  
Open your terminal and run:

```sh
git clone https://github.com/your-username/crowdcube.git
```

Then, navigate to the project folder:

```sh
cd crowdcube
```

---

### 2️⃣ Install Dependencies  
Run the following command to install all required dependencies for both the **client** and **server**:

#### For the client:

```sh
cd client
npm install
```

#### For the server:

```sh
cd ../server
npm install
```

---

### 3️⃣ Configure Environment Variables  

Create a `.env` file in both the **client** and **server** folders and add the following credentials:

#### **Client-side (`client/.env`)**
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=http://localhost:5000
```

#### **Server-side (`server/.env`)**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

---

### 4️⃣ Start the Backend Server  

Inside the `server` directory, start the backend:

```sh
npm run dev
```

You should see a message like:

```
Server is running on http://localhost:5000
```

---

### 5️⃣ Start the Frontend  

Inside the `client` directory, start the frontend:

```sh
npm run dev
```

It will launch the project at:

```
http://localhost:5173
```

---

### 6️⃣ Access the Application  
Once both the backend and frontend are running:

- Open your browser and go to `http://localhost:5173`
- Sign up or log in using Firebase authentication.
- Create and manage crowdfunding campaigns.

---

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Hosting**: Netlify/Firebase (Client), Vercel (Server)

---

