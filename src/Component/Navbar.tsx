import { useState } from 'react';
import Logo from "../assets/logo-text.png"
import LogoIcon from "../assets/hamburger.png"

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('Home');
  const [showNavLinks, setShowNavLinks] = useState(false);

  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];
  const [signBtn, setsignBtn] = useState('Sign In');
  const signLinks = ['Sign In', 'Sign Up'];

  const handelNavLink = () => {
    setShowNavLinks((isVisible) => !isVisible)
  }

  return (
    <nav className="fixed inset-x-0 mx-auto z-50 flex w-full max-w-7xl items-center justify-between border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-2.5">
        <img src={Logo} alt="Logo" className="hidden h-8 w-auto sm:block" />
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={showNavLinks}
          onClick={handelNavLink}
          className="rounded-lg p-2 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-400 sm:hidden"
        >
          <img src={LogoIcon} alt="" className="h-6 w-6" />
        </button>
      </div>

      <div className={`${showNavLinks
        ? 'absolute left-0 right-0 top-full flex flex-col items-stretch gap-2 border-b border-gray-100 bg-white p-4 shadow-lg'
        : 'hidden'} md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {navLinks.map((m) => (
          <button
            key={m}
            onClick={() => setActiveLink(m)}
            className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors duration-200 hover:bg-pink-50 md:px-0 md:hover:bg-transparent
              ${activeLink === m ? 'text-pink-500 font-semibold' : 'text-slate-600 hover:text-slate-900'}
              ${showNavLinks ?"bg-fuchsia-100" : ""}
              `}
          >{m}
          </button>
        ))}

      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        {signLinks.map(m => (
          <button
            key={m}
            onClick={() => setsignBtn(m)}
            className={`rounded-full px-3 py-2 text-xs font-medium transition-colors duration-200 sm:px-4 sm:text-sm
            ${signBtn === m
                ? 'bg-pink-500 font-semibold text-white '
                : 'text-slate-600 hover:text-slate-900'
              }`}
          >
            {m}
          </button>
        ))
        }
      </div>

    </nav>
  );
}


