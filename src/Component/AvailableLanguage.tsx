
import type { Dispatch, SetStateAction } from 'react';
import type { CardType } from '../Type';
import LanguageCard from './LanguageCard';

interface LanguageType{
   language : CardType[];
   selectedLan : CardType[];
   setSelectedLan : Dispatch<SetStateAction<CardType[]>>;
    isSelected: boolean;
    setIsSelected: Dispatch<SetStateAction<boolean>>;
}

const AvailableLanguage = ({language, selectedLan, setSelectedLan, isSelected, setIsSelected} : LanguageType) => {
    
    return (        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
            {
                language.map((m : CardType, index: number)=>{
                    return( 
                        <LanguageCard key = {index} lanCard = {m} selectedLan ={selectedLan} setSelectedLan = {setSelectedLan} isSelected={isSelected} setIsSelected={setIsSelected}/>
                    )
                })
            }
            
        </div>
    );
};

export default AvailableLanguage;


