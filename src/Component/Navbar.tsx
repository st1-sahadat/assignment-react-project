import { useState } from 'react';
import Logo from "../assets/logo-text.png"

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('Home');
  const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];
  const [signBtn, setsignBtn] = useState('Sign In');
  const signLinks = ['Sign In', 'Sign Up'];

  return (
    <nav className="w-full border-gray-100 px-6 py-3.5 flex items-center justify-between container mx-auto">
      
      <div className="flex items-center gap-2.5 cursor-pointer">
      <img src={Logo} alt="" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((m) => (
          <button
            key={m}
            onClick={() => setActiveLink(m)}
            className={`text-sm font-medium transition-colors duration-200 ${
              activeLink === m
                ? 'text-pink-500 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-5">
        {signLinks.map(m=>(
          <button
          key={m}
          onClick={()=> setsignBtn(m)}
          className={`text-sm font-medium transition-colors duration-200 p-2 rounded-2xl
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