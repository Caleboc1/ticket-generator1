
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-[#002A2F]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">CAL-tickets</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/events" className="text-white/80 hover:text-white transition-colors">
            Events
          </Link>
          <Link to="/my-tickets" className="text-white/80 hover:text-white transition-colors">
            My Tickets
          </Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">
            About Project
          </Link>
          <Link
            to="/my-tickets"
            className="bg-white px-4 py-2 rounded-lg text-black hover:bg-white/90 transition-colors flex items-center space-x-2 font-medium"
          >
            MY TICKETS →
          </Link>
        </div>
      </nav>
    </header>
  );
}
