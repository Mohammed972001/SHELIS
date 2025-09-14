import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 w-full">
      <div className="hidden md:flex items-center gap-8 flex-1">
        <Link href="/" className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
          Home
        </Link>
        <Link href="/catalog" className="flex items-center gap-1 text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
          Catalog
          <span className="text-xs text-gray-500">▼</span>
        </Link>
        <Link href="/fashion" className="flex items-center gap-1 text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
          Fashion
          <span className="text-xs text-gray-500">▼</span>
        </Link>
        <Link href="/collections" className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
          Collections
        </Link>
        <Link href="/contact" className="text-gray-800 font-medium text-sm hover:text-gray-600 transition-colors">
          Contact
        </Link>
      </div>

      <div className="flex justify-center flex-1">
        <Link href="/" className="text-3xl md:text-2xl font-bold text-gray-800 tracking-wider">
          SHELIS
        </Link>
      </div>

      <div className="flex items-center gap-6 md:gap-4 flex-1 justify-end">
        <button className="flex items-center gap-2 text-gray-800 text-sm hover:text-gray-600 transition-colors border-none bg-transparent cursor-pointer">
          <span className="text-lg"></span>
          <span className="hidden sm:inline">Search</span>
        </button>
        <button className="flex items-center gap-2 text-gray-800 text-sm hover:text-gray-600 transition-colors border-none bg-transparent cursor-pointer">
          <span className="text-lg"></span>
          <span className="hidden sm:inline">Account</span>
        </button>
        <button className="flex items-center gap-2 text-gray-800 text-sm hover:text-gray-600 transition-colors border-none bg-transparent cursor-pointer">
          <span className="text-lg"></span>
          <span className="hidden sm:inline">Wishlist</span>
        </button>
        <button className="flex items-center gap-2 text-gray-800 text-sm hover:text-gray-600 transition-colors border-none bg-transparent cursor-pointer">
          <span className="text-lg"></span>
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </nav>
  );
}