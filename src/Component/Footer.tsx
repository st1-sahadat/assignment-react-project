import Logo from "../assets/logo-text.png"
export default function Footer() {
  return (
    <footer className="w-full bg-white font-sans text-slate-400 py-12  border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-5 space-y-6 pr-4">
            <div className="flex items-center gap-2">
                <img src={Logo} alt="" />
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 text-sm font-semibold text-slate-700">
              <a href="#github" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">            
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
                PRODUCT
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="hover:text-slate-600 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-600 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-600 transition-colors">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-slate-600 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-slate-600 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-600 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-4">
                LEGAL
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>



        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}