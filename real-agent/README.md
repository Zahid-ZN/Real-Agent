# Real Agent

## Overview
Real Agent is a React application designed to facilitate interactions between buyers, sellers, and realtors in the real estate market. The application allows sellers to list properties, buyers to submit requests for properties, and realtors to manage listings and match them with buyer requests.

## Features
- **Seller View**: Sellers can input property details including title, location, and price to create listings.
- **Buyer View**: Buyers can submit their desired location and budget to request properties.
- **Realtor View**: Realtors can view all listings and see matches between buyer requests and available properties. A 'Match Found' badge indicates successful matches.
- **Paywall**: The 'View Contact' button in the Realtor view alerts users that a subscription is required to access contact information.

## Project Structure
```
real-agent
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components
│   │   ├── BuyerView.jsx   # Component for buyer input forms
│   │   ├── RealtorView.jsx  # Component for realtor dashboard
│   │   ├── SellerView.jsx   # Component for seller input forms
│   │   └── SharedComponents.jsx # Shared components for consistency
│   ├── App.jsx              # Main application component
│   ├── index.jsx            # Entry point for the React application
│   └── styles.css           # CSS styles for the application
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd real-agent
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used
- React
- CSS
- JavaScript

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.