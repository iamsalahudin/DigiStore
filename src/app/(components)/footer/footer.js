import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-16 text-sm">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="mb-3">Get 10% off your first order</p>
          <form className="flex border-2 border-white rounded-md px-4 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-10 flex-1 rounded-l-md bg-transparent outline-none text-white"
            />
            <button
              type="submit"
              className="rounded-r-md"
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-3 ">Support</h3>
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        &copy; Copyright DigiStore 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
