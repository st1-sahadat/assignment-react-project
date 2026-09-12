import { useState, type Dispatch, type SetStateAction } from 'react';
import type { CardType } from '../Type';

interface LanCardType{
    lanCard : CardType;
    selectedLan : CardType[];
    setSelectedLan : Dispatch<SetStateAction<CardType[]>>
}




const LanguageCard = ({lanCard, selectedLan, setSelectedLan} : LanCardType) => {

        const [isSelected, setIsSelected] = useState(false);

        const handleLan = ()=>{
            setIsSelected(true);

        }


    
    return (
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between font-sans">
          <div>

            <div className="flex items-center justify-between mb-5">
              <img 
                src={lanCard.icon} 
                alt="React Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="bg-sky-50 text-sky-400 text-xs font-medium px-4 py-1.5 rounded-full">
                {lanCard.badge}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{lanCard.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{lanCard.description}</p>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
              <span className="bg-slate-100/70 text-slate-600 font-medium px-3 py-1.5 rounded-lg">{lanCard.category}</span>
              <span className="text-slate-400 font-medium">{lanCard.difficulty}</span>
              <div className="flex items-center gap-1 font-semibold text-slate-700">
                <span className="text-amber-400 text-sm">{lanCard.rating}</span> 
              </div>
            </div>
            <button onClick={handleLan}
                    className="btn w-full bg-[#5d7fcf] hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-2xl transition-colors duration-200"
                    
                        disabled={isSelected===true ? true : false}
                    >
                        {isSelected ? "Success" : "Add to stack"}
            </button>
          </div>
        </div>


      
    );
};

export default LanguageCard;