import { Link } from '@/i18n/navigation';
import Logo from '@/public/logo.svg';

const Navbar = () => {
  return (
    <nav className="container m-auto flex max-w-6xl items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <Logo className="h-12 w-40" />
      </div>
      <div className="hidden items-center rounded-full border border-white/50 bg-white/75 bg-gradient-to-r from-pink-100/40 via-violet-100/40 to-indigo-100/40 px-3 text-sm font-medium text-gray-800 shadow-lg ring-1 shadow-gray-500/5 ring-gray-500/[.075] backdrop-blur-xl xl:flex">
        <Link
          href="#about"
          className="group relative block flex-none px-3 py-2.5 transition duration-300 hover:text-violet-600"
        >
          About
          <span className="absolute inset-x-1 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% opacity-0 transition duration-300 group-hover:scale-x-100 group-hover:opacity-100"></span>
          <span className="absolute inset-0 origin-bottom scale-0 overflow-hidden opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
            <span className="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-violet-500/20 to-transparent blur"></span>
          </span>
        </Link>
        <Link
          href="#features"
          className="group relative block flex-none px-3 py-2.5 transition duration-300 hover:text-violet-600"
        >
          Features
          <span className="absolute inset-x-1 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% opacity-0 transition duration-300 group-hover:scale-x-100 group-hover:opacity-100"></span>
          <span className="absolute inset-0 origin-bottom scale-0 overflow-hidden opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
            <span className="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-violet-500/20 to-transparent blur"></span>
          </span>
        </Link>
        <Link
          href="#how-it-works"
          className="group relative block flex-none px-3 py-2.5 transition duration-300 hover:text-violet-600"
        >
          How It Works
          <span className="absolute inset-x-1 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-violet-500/0 from-10% via-violet-400 to-violet-500/0 to-90% opacity-0 transition duration-300 group-hover:scale-x-100 group-hover:opacity-100"></span>
          <span className="absolute inset-0 origin-bottom scale-0 overflow-hidden opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
            <span className="absolute inset-x-4 -bottom-2 h-full rounded-t-full bg-gradient-to-t from-violet-500/20 to-transparent blur"></span>
          </span>
        </Link>
      </div>
      <div className="hidden items-center rounded-full border border-white/50 bg-white/75 bg-gradient-to-r from-pink-100/40 via-violet-100/40 to-indigo-100/40  text-sm font-medium text-gray-800 shadow-lg ring-1 shadow-gray-500/5 ring-gray-500/[.075] backdrop-blur-xl xl:flex">
        <Link
          href="/login"
          className="m-0.5 rounded-l-full rounded-r-xl bg-neutral-50/80 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-xl hover:text-gray-900"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="m-0.5 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
