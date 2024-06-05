import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, loginWithGithub, loginWithGoogle } from '../utils/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      await login(email, password);
      console.log('Login successful, navigating to /dashboard');
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'An error occurred. Please try again.');
    }
  };

  const handleSignupNavigation = () => {
    navigate('/signup');
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      console.log('GitHub login successful, navigating to /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('GitHub login error:', error);
      setError('An error occurred with GitHub login. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      console.log('Google login successful, navigating to /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Google login error:', error);
      setError('An error occurred with Google login. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#082032]">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-1/2 bg-[#334756] p-24">
        <h1 className="text-5xl font-bold text-white mb-8">WELCOME TO BREATHE ESG</h1>
        <p className="text-white mb-8">We help you track your organization's metrics as per the ESG Guidelines.</p>
        <p className="text-white">Sounds Interesting? <a href="#" className="text-[#3C9D9B]">Get in touch!</a></p>
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 lg:p-24">
        <img src="https://th.bing.com/th/id/OIP.s9JFNLzEbjoZhjijeA5X-AHaHa?rs=1&pid=ImgDetMain" alt="Logo" className="mb-8 w-24" />
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-[#2C394B] p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-8">Login</h2>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-[#2C394B] text-white placeholder-gray-400"
              placeholder="Your Email ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password *</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded bg-[#2C394B] text-white placeholder-gray-400"
              placeholder="Password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button type="submit" className="w-full bg-[#3C9D9B] text-white py-3 rounded mb-4">Login</button>
          <button onClick={handleSignupNavigation} className="w-full bg-[#3C9D9B] text-white py-3 rounded mb-4">Sign Up</button>
          <button onClick={handleGoogleLogin} className="w-full bg-[#0D7377] text-white py-3 rounded mb-4">Login with Google</button>
          <button onClick={handleGithubLogin} className="w-full bg-[#212121] text-white py-3 rounded">Login with GitHub</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
