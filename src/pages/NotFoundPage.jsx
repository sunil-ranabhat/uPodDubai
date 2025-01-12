import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center  p-6  max-w-md">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <h2 className="text-xl text-gray-700 mt-4">Page Not Found</h2>
        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-6 text-blue-500 hover:text-blue-700">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
