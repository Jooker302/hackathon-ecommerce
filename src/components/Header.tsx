'use client';
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCart } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    return(
      <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
        <Image
        src="/main.png"
        className="mr-4 rounded-2xl"
        width={100}
        height={100} 
        alt="Queen's Store"/>
        </Link>
        {/* <img src="/logo.png" alt="Queen's Store" className="h-8 mr-4" /> */}
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/female" className="text-gray-800">Female</Link></li>
          <li><Link href="/male" className="text-gray-800">Male</Link></li>
          <li><Link href="/kids" className="text-gray-800">Kids</Link></li>
          <li><Link href="/all" className="text-gray-800">All Products</Link></li>
        </ul>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {/* <input
          type="text"
          className="rounded-xl border border-gray-300 px-3 py-1 focus:outline-none focus:border-blue-500"
          placeholder="Search"
        /> */}
        {/* <a href="#" className="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 16a4 4 0 0 1 6.32 0m4.24 4.24l-2.83-2.83"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11l2-2 2 2m6 0l2-2 2 2m0 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"
            />
          </svg>
        </a> */}
        <Link className="m-2" href="/cart"><FontAwesomeIcon icon={faCartShopping} size="lg" className='h-4 w-4 text-black' /></Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-800"
        >
          <span className="block h-2 w-6 mb-1 bg-gray-800"></span>
          <span className="block h-2 w-6 my-1 bg-gray-800"></span>
          <span className="block h-2 w-6 mt-1 bg-gray-800"></span>
        </button>
        <div
          className={`absolute bg-white top-12 right-0 p-4 mt-2 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-2">
            <li><Link href="/female" className="text-gray-800 block">Female</Link></li>
            <li><Link href="/male" className="text-gray-800 block">Male</Link></li>
            <li><Link href="/kids" className="text-gray-800 block">Kids</Link></li>
            <li><Link href="/all" className="text-gray-800 block">All Products</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Header;