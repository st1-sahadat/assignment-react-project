
import type { CardType } from '../Type';
import LanguageCard from './LanguageCard';

interface LanguageType{
   language : CardType[];
}

const AvailableLanguage = ({language} : LanguageType) => {
    
    return (        
    //   {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-6 justify-items-center">
            {
                language.map((m : CardType, index: number)=>{
                    return(
                        <LanguageCard key = {index} lanCard = {m}/>
                    )
                })
            }
            
        </div>
    );
};

export default AvailableLanguage;