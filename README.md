# Real Agent

## Overview
Real Agent is a React application designed to facilitate real estate transactions by connecting buyers, sellers, and realtors. The application allows sellers to list properties, buyers to request properties based on their preferences, and realtors to manage listings and match them with buyer requests.

## Features
- **Seller View**: Sellers can input property details including title, location, and price. This information is stored in the application's state.
- **Buyer View**: Buyers can submit their desired location and budget, which are saved for matching with available listings.
- **Realtor View**: Realtors can view all property listings and see if any match the buyer requests. A 'Match Found' badge is displayed for matching properties. A 'View Contact' button is available, which alerts users about subscription requirements.

## Project Structure
```
real-agent
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── BuyerView.jsx
│   │   ├── RealtorView.jsx
│   │   ├── SellerView.jsx
│   │   └── SharedComponents.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── styles.css
├── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/real-agent.git
   ```
2. Navigate to the project directory:
   ```
   cd real-agent
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Technologies Used
- React
- ReactDOM
- CSS for styling

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.