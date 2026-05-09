import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <div className="font-bold text-xl">
          Portfolio
        </div>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/projects" className="hover:text-gray-500">Projects</Link>
          <Link to="/about" className="hover:text-gray-500">About</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact</Link>
        </div>

      </div>
    </nav>
  );
}