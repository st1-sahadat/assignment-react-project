import { use, useState } from 'react';
import type { CardType } from '../Type';
import AvailableLanguage from './AvailableLanguage';
import LanguageCart from './LanguageCart';

interface CardGridType {
  promise: Promise<CardType[]>
}

const CardGrid = ({ promise }: CardGridType) => {

  const language = use(promise);
  const [selectedLan, setSelectedLan] = useState<CardType[]>([]);  
  const [isSelected, setIsSelected] = useState(false);
  
  return (
  <div  className=" inset-x-0 mx-auto z-50  w-full max-w-7xl items-center justify-between border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
    Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span>
  </h2>
  <p className="text-slate-400 text-base sm:text-lg font-normal mt-3">
    Pick one technology per category to build your ideal stack.
  </p>



    <div className='mt-8 grid grid-cols-12 gap-6'>
    <div className='col-span-12 rounded-2xl p-6  md:col-span-8'>
      <AvailableLanguage language = {language} selectedLan ={selectedLan} setSelectedLan = {setSelectedLan} isSelected={isSelected} setIsSelected={setIsSelected}/>
    </div>

    <div className='col-span-12 rounded-2xl p-6  md:col-span-4'>
      <LanguageCart selectedLan ={selectedLan} setSelectedLan = {setSelectedLan} isSelected={isSelected} setIsSelected={setIsSelected}/>
    </div>
    </div>
</div>
  );
};

export default CardGrid;
