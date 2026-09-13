
import { type Dispatch, type SetStateAction } from 'react';
import type { CardType } from '../Type';

interface LanguageCartType {
  selectedLan: CardType[];
  setSelectedLan: Dispatch<SetStateAction<CardType[]>>;
}

const LanguageCart = ({ selectedLan, setSelectedLan }: LanguageCartType) => {
  // Remove individual item from stack
  const handleRemove = (id: string | number) => {
    setSelectedLan((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items from stack
  const handleRemoveAll = () => {
    setSelectedLan([]);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] font-sans">
      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900 mb-1">Your Stack</h3>

      {/* Subtitle / Counter */}
      <p className="text-slate-400 text-sm mb-6">
        {selectedLan.length === 0
          ? 'No technologies selected yet.'
          : `${selectedLan.length} ${selectedLan.length === 1 ? 'Technology' : 'Technologies'} Selected`}
      </p>

      {/* Content Area */}
      {selectedLan.length === 0 ? (
        /* Empty State */
        <div className="w-full py-8 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
          <span className="text-slate-400 text-sm font-normal">
            Your stack is empty.
          </span>
        </div>
      ) : (
        /* Selected Items List */
        <div className="space-y-3">
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {selectedLan.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3.5 border border-slate-100 rounded-2xl bg-white shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-normal">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Remove Item Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                  // aria-label={`Remove ${item.name}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={handleRemoveAll}
            className="w-full mt-4 py-3 border border-red-200 text-red-500 hover:bg-red-50 font-semibold text-base rounded-2xl transition-colors duration-200"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageCart;








// import { type Dispatch, type SetStateAction } from 'react';
// import type { CardType } from '../Type';

// interface LanguageCartType{
//     selectedLan : CardType[];
//     setSelectedLan : Dispatch<SetStateAction<CardType[]>>

// }

// const LanguageCart = ({selectedLan, setSelectedLan} : LanguageCartType) => {
//   console.log(selectedLan);
  
//     return (
//         <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] font-sans">
//       <h3 className="text-2xl font-bold text-slate-900 mb-1">
//         Your Stack
//       </h3>
//       <p className="text-slate-400 text-sm mb-6"> No technologies selected yet.</p>
      
//       <div className="w-full py-8 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
//         <span className="text-slate-400 text-sm font-normal">
//           Your stack is empty.
//         </span>
//       </div>
//     </div>
//     );
// };

// export default LanguageCart;