import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
          Marvel <span className="font-normal text-gray-400 text-lg">| Developers</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link href="/why-marvel" className="hover:text-white transition-colors">Why Marvel</Link>
        <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
        <Link href="/login" className="hover:text-white transition-colors">Sign in</Link>
        <Link
          href="/signup"
          className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Sign up free
        </Link>
      </div>
    </nav>
  );
}
