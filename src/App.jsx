import React, { useState } from "react";

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (err) => {
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case err.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case err.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            case err.UNKNOWN_ERROR:
              setError("An unknown error occurred.");
              break;
            default:
              setError("Failed to retrieve location. Please try again.");
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Request high accuracy
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  const openInMaps = () => {
    if (location) {
      const { latitude, longitude } = location;
      const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(mapsUrl, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <button
          onClick={fetchLocation}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Get Current Location
        </button>

        {location && (
          <div className="mt-4">
            <button
              onClick={openInMaps}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
            >
              Open on Maps
            </button>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-500">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
