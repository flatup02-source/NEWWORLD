import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

/**
 * A reusable navigation link component with a hover effect.
 */
const NavLink = ({ href, label, className = '', onClick }: NavLinkProps) => (
  <Link href={href} onClick={onClick} className={`relative group text-gray-700 hover:text-pink-700 transition-colors cursor-pointer font-medium py-2 ${className}`}>
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

export default NavLink;
