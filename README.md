

```markdown
# Location Fetcher App

This is a simple React web app created with Vite and Tailwind CSS that fetches the user's current location using the Geolocation API. The app provides a button to get the user's precise location and another to open the location on Google Maps. This solution is completely free and does not require any paid services or APIs.

## Features

- **Fetch User's Location**: Uses the browser's Geolocation API to retrieve the user's current latitude and longitude.
- **Open Location on Google Maps**: After fetching the location, the app provides a button that opens the location directly on Google Maps.
- **Free to Use**: No third-party services or APIs are required beyond the standard Geolocation API provided by modern browsers.

## Tech Stack

- **Vite**: A fast and lightweight build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/location-fetcher-app.git
   cd location-fetcher-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Building for Production

To build the app for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Deployment on GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add the following scripts to `package.json`:**

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

4. **Access Your App**

   After deploying, your app will be available at `https://<yourusername>.github.io/location-fetcher-app/`.

## How It Works

This app uses the Geolocation API, a standard browser feature, to access the user's current location. It does not require any special permissions beyond what the browser prompts the user to grant. The app's location functionality is completely free, with no need for third-party services or Google Maps API keys.

## License

This project is licensed under the MIT License. Feel free to use and modify it as you see fit.
```

### Hotkeys
- **W**: Yes, Continue  
- **Z**: Write finished fully implemented code to files. Zip user files, download link  
- **N**: Netlify auto Deploy, instantly create static site  
- **C**: Code mode. No prose. Just do; no talk. NO commentary. Remove placeholders
