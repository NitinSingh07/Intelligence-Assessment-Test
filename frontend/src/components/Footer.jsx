import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img
              src="/icon.png"
              alt="Company Logo"
              className="h-12 w-auto mb-4"
            />
            {/* <p className="text-sm text-gray-300">
              We are dedicated to providing innovative solutions that enhance
              your experience and make your tasks easier. Our platform is
              designed to deliver efficiency and excellence in every aspect of
              our service.
            </p> */}
            <div className="mt-16 flex gap-4">
              <a
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com"
              >
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.324v21.353c0 .73.593 1.324 1.324 1.324h11.491v-9.294h-3.126v-3.622h3.126v-2.671c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.794.143v3.239l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.591l-.467 3.622h-3.124v9.294h6.125c.731 0 1.324-.594 1.324-1.324v-21.353c0-.731-.593-1.324-1.324-1.324z" />
                </svg>
              </a>
              <a
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.851-3.037-1.852 0-2.135 1.445-2.135 2.941v5.665h-3.554v-11.452h3.414v1.563h.049c.476-.899 1.635-1.85 3.364-1.85 3.596 0 4.257 2.366 4.257 5.439v6.3h-.001zm-14.451-12.906c-1.144 0-2.068-.925-2.068-2.066s.925-2.065 2.068-2.065c1.141 0 2.065.924 2.065 2.065 0 1.142-.924 2.066-2.065 2.066zm1.777 12.906h-3.554v-11.452h3.554v11.452zm17.223-20.452h-24v24h24v-24z" />
                </svg>
              </a>
              <a
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.328 3.608 1.303.975.975 1.241 2.242 1.303 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.062 1.366-.328 2.633-1.303 3.608-.975.975-2.242 1.241-3.608 1.303-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.069c-1.366-.062-2.633-.328-3.608-1.303-.975-.975-1.241-2.242-1.303-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.069-4.849c.062-1.366.328-2.633 1.303-3.608.975-.975 2.242-1.241 3.608-1.303 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.257 0-3.667.012-4.947.071-1.438.065-2.712.365-3.769 1.422-1.057 1.057-1.357 2.331-1.422 3.769-.059 1.279-.071 1.69-.071 4.947s.012 3.667.071 4.947c.065 1.438.365 2.712 1.422 3.769 1.057 1.057 2.331 1.357 3.769 1.422 1.279.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.438-.065 2.712-.365 3.769-1.422 1.057-1.057 1.357-2.331 1.422-3.769.059-1.279.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.065-1.438-.365-2.712-1.422-3.769-1.057-1.057-2.331-1.357-3.769-1.422-1.279-.059-1.69-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162s1.865-4.162 4.162-4.162 4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.442-.646-1.442-1.442 0-.796.646-1.442 1.442-1.442.796 0 1.442.646 1.442 1.442 0 .796-.646 1.442-1.442 1.442z" />
                </svg>
              </a>
              <a
                className="transition-transform transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                {/* Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.577 2.165-2.724-.951.566-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.919 0 .386.043.762.127 1.124-4.087-.205-7.713-2.164-10.14-5.144-.424.726-.666 1.571-.666 2.475 0 1.71.87 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.953 4.838-.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.087.627 1.956 2.444 3.379 4.599 3.418-1.68 1.317-3.797 2.102-6.102 2.102-.395 0-.785-.023-1.17-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.054 0 14.004-7.496 14.004-13.986 0-.213-.005-.426-.015-.637.961-.693 1.796-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-4 text-purple-950">
              Contact Information
            </h2>
            <div className="flex items-center mb-4">
              <div class="inline-block p-2 rounded-full bg-gray-100 shadow-md transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  class="fill-black transition duration-300 hover:fill-blue-500 active:fill-blue-700"
                >
                  <path d="M2 3.5C2 2.7 2.7 2 3.5 2H20.5C21.3 2 22 2.7 22 3.5V20.5C22 21.3 21.3 22 20.5 22H3.5C2.7 22 2 21.3 2 20.5V3.5ZM3.5 4L12 11L20.5 4H3.5ZM4 19.5V5.8L12 12.6L20 5.8V19.5H4Z" />
                </svg>
              </div>
              <div className="ml-4">
                <a
                  href="mailto:contact@company.com"
                  className="text-sm font-medium"
                >
                  contact@company.com
                </a>
                <p className="text-xs text-gray-300">Email</p>
              </div>
            </div>
            <div className="flex items-center">
              <div class="inline-block p-2 rounded-full bg-gray-100 shadow-md transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  class="fill-black transition duration-300 hover:fill-green-500 active:fill-green-700"
                >
                  <path d="M6.62 10.79a15.978 15.978 0 0 0 6.59 6.59l2.2-2.2a1.002 1.002 0 0 1 1.08-.27c1.12.37 2.33.57 3.55.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.92 21.5 2.5 14.08 2.5 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.22.2 2.43.57 3.55.1.36 0 .76-.27 1.08l-2.2 2.16z" />
                </svg>
              </div>
              <div className="ml-4">
                <a href="tel:+1234567890" className="text-sm font-medium">
                  +123 456 7890
                </a>
                <p className="text-xs text-gray-300">Phone</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:w-1/3">
            <h2 className="text-lg text-purple-950 font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-gray-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm hover:text-gray-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-sm hover:text-gray-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-900">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
