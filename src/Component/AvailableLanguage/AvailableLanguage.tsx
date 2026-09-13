
import type { Dispatch, SetStateAction } from 'react';
import type { CardType } from '../../Type';
import LanguageCard from './LanguageCard';

interface LanguageType{
   language : CardType[];
   selectedLan : CardType[];
   setSelectedLan : Dispatch<SetStateAction<CardType[]>>;
}

const AvailableLanguage = ({language, selectedLan, setSelectedLan} : LanguageType) => {
    
    return (        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
            {
                language.map((m : CardType, index: number)=>{
                    return( 
                        <LanguageCard key = {index} lanCard = {m} selectedLan ={selectedLan} setSelectedLan = {setSelectedLan}/>
                    )
                })
            }
            
        </div>
    );
};

export default AvailableLanguage;


