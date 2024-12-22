"use client"
import { useState } from 'react';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save changes logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row items-start min-h-screen lg:h-[700px]">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100 rounded shadow-md mb-4 lg:mb-0 lg:h-screen">
        <h2 className="text-lg font-bold mb-4">Manage My Account</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">My Profile</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">Address Book</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">My Payment Options</a></li>
          <h2 className="text-lg font-bold mt-4">My Orders</h2>
          <li><a href="#" className="text-gray-700 hover:underline">My Returns</a></li>
          <li><a href="#" className="text-gray-700 hover:underline">My Cancellations</a></li>
          <h2 className="text-lg font-bold mt-4">My Wishlist</h2>
          <li><a href="#" className="text-gray-700 hover:underline">My Wishlist</a></li>
        </ul>
      </aside>

      {/* Form Section */}
      <main className="w-full lg:w-3/4 p-4 bg-white shadow-md rounded flex flex-col justify-between lg:h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-4">Edit Your Profile</h1>
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 rounded px-3 py-2"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 rounded px-3 py-2"
                placeholder="Enter your address"
              />
            </div>
            <h2 className="text-lg font-bold mb-4">Password Changes</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded px-3 py-2"
                placeholder="Enter current password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded px-3 py-2"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border-gray-300 rounded px-3 py-2"
                placeholder="Confirm new password"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-auto">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
