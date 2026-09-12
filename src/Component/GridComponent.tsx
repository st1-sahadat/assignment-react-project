import techData from './techData.json';




const badgeStyles = {
  blue: 'bg-sky-50 text-sky-600',
  green: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-600',
  red: 'bg-red-50 text-red-500',
  yellow: 'bg-amber-50 text-amber-600',
  cyan: 'bg-cyan-50 text-cyan-600',
};

export default function TechGrid() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techData.map((tech) => (
          <div
            key={tech.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Top Bar: Icon & Pill Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
                {tech.badge && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeStyles[tech.badgeType] || 'bg-slate-100 text-slate-600'}`}>
                    {tech.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                {tech.description}
              </p>
            </div>

            {/* Bottom Meta & Button */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span className="bg-slate-50 px-2.5 py-1 rounded-md text-slate-600 font-medium">
                  {tech.category}
                </span>
                <span>{tech.level}</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span className="text-amber-400">★</span> {tech.rating}
                </span>
              </div>

              <button className="w-full bg-[#0B0F19] hover:bg-slate-800 text-white font-medium text-sm py-2.5 rounded-xl transition-colors">
                Add to Stack
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}