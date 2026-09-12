import React from 'react';

const LanguageCart = () => {
    return (
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] font-sans">
      <h3 className="text-2xl font-bold text-slate-900 mb-1">
        Your Stack
      </h3>
      <p className="text-slate-400 text-sm mb-6"> No technologies selected yet.</p>
      
      <div className="w-full py-8 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
        <span className="text-slate-400 text-sm font-normal">
          Your stack is empty.
        </span>
      </div>
    </div>
    );
};

export default LanguageCart;