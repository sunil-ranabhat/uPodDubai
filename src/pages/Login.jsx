import React, { useState } from 'react';

function Login({ isPopupOpen, closePopup }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <>
      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Tabs */}
            <div className="flex justify-between mb-6 border-b">
              <button
                className={`w-full py-2 text-center ${activeTab === 'login' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`w-full py-2 text-center ${activeTab === 'register' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'login' ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )}
          </div>
        </div>
      )}
    </>
  );
}

const SocialMediaButtons = () => (
  <div className="text-center mb-4">
    <p>Sign in with:</p>
    <div className="flex justify-center space-x-4 mb-4">
      {['facebook-f', 'twitter', 'google', 'github'].map((icon, index) => (
        <button
          key={index}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <i className={`fab fa-${icon}`} />
        </button>
      ))}
    </div>
    <p className="text-center">or:</p>
  </div>
);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Basic Validation
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Invalid email or password');
        return;
      }

      alert('Login successful');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <SocialMediaButtons />

      <form onSubmit={handleLogin}>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        setError('Registration failed. Try again.');
        return;
      }

      alert('Registration successful');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <SocialMediaButtons />

      <form onSubmit={handleRegister}>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;

