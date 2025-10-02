# Staffing Agency App

## Overview
The Staffing Agency App is a multi-page React application designed for a global blue-collar staffing agency. It provides a user-friendly interface for job seekers and employers to connect, showcasing available job listings, company information, and contact details.

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Daisy UI**: A component library for Tailwind CSS that provides pre-designed UI components.
- **React Router**: A library for routing in React applications, enabling navigation between different pages.
- **Redux Toolkit**: A library for managing application state, particularly for handling job-related data.

## Project Structure
```
staffing-agency-app
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── About.jsx
│   │   ├── Body.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── JobCard.jsx
│   ├── features
│   │   └── jobs
│   │       ├── jobsSlice.js
│   │       └── JobsList.jsx
│   ├── pages
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── JobsPage.jsx
│   │   └── NotFound.jsx
│   ├── app
│   │   └── store.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── routes.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd staffing-agency-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Features
- **Home Page**: Displays a hero section, services overview, benefits, testimonials, and a call-to-action.
- **About Page**: Provides information about the company's mission, vision, values, and history.
- **Contact Page**: Contains contact information and a form for inquiries.
- **Jobs Page**: Lists available job openings with detailed job cards.
- **Responsive Design**: The application is designed to be fully responsive, ensuring a seamless experience on all devices.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.