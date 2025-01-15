"use client";
import { useState } from "react";

export default function ManageAccount() {
  const [activeSection, setActiveSection] = useState("My Profile");

  // Profile State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", formData);
    // Clear the input fields after submit
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Address State
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Address Submitted:", addressData);
    // Clear the input fields after submit
    setAddressData({
      street: "",
      city: "",
      province: "",
      country: "",
      postalCode: "",
    });
  };

  // Payment State
  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details Submitted:", paymentData);
    // Clear the input fields after submit
    setPaymentData({
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row items-start min-h-screen lg:h-[700px]">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100 rounded shadow-md mb-4 lg:mb-0">
        <h2 className="text-lg font-bold mb-4">Manage My Account</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`${
                activeSection === "My Profile"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:underline`}
              onClick={() => setActiveSection("My Profile")}
            >
              My Profile
            </button>
          </li>
          <li>
            <button
              className={`${
                activeSection === "Address Book"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:underline`}
              onClick={() => setActiveSection("Address Book")}
            >
              Address Book
            </button>
          </li>
          <li>
            <button
              className={`${
                activeSection === "Payment"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:underline`}
              onClick={() => setActiveSection("Payment")}
            >
              Payment
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 bg-white shadow-md rounded flex flex-col justify-between lg:h-screen">
        {activeSection === "My Profile" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Edit Your Profile</h1>
            <form onSubmit={handleProfileSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleProfileChange}
                    className="w-full border-gray-300 rounded px-3 py-2"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleProfileChange}
                    className="w-full border-gray-300 rounded px-3 py-2"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleProfileChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleProfileChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <h2 className="text-lg font-bold mb-4">Password Changes</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleProfileChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter current password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleProfileChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleProfileChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
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
        )}

        {activeSection === "Address Book" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Address Book</h1>
            <form onSubmit={handleAddressSubmit} className="flex flex-col">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Street</label>
                <input
                  type="text"
                  name="street"
                  value={addressData.street}
                  onChange={handleAddressChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter street"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={addressData.city}
                  onChange={handleAddressChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Province</label>
                <input
                  type="text"
                  name="province"
                  value={addressData.province}
                  onChange={handleAddressChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter province"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={addressData.country}
                  onChange={handleAddressChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter country"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={addressData.postalCode}
                  onChange={handleAddressChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter postal code"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit Address
                </button>
              </div>
            </form>
          </div>
        )}

        {activeSection === "Payment" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Payment</h1>
            <form onSubmit={handlePaymentSubmit} className="flex flex-col">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handlePaymentChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter cardholder name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  className="w-full border-gray-300 rounded px-3 py-2"
                  placeholder="Enter card number"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handlePaymentChange}
                    className="w-full border-gray-300 rounded px-3 py-2"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    className="w-full border-gray-300 rounded px-3 py-2"
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Add Card
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

