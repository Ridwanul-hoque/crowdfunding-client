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
[Insert Live Site Link Here]

## How to Run Locally

### Prerequisites
- Node.js
- MongoDB
- Firebase Project



5. Access the application at `http://localhost:5000`.

## Technology Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Hosting**: Netlify/Firebase (Client), Vercel (Server)




