import { Suspense } from 'react';
import type {CardType} from './Type'
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import CardGrid from './Component/CardGrid';

const promise = async(): Promise<CardType[]> =>{
    const res = await fetch("../public/LanguageData.json");
    const data = await res.json();
    return data;
}

const App = () => {
    return (
    <>
    <Navbar/>
    <Banner/>   

    <Suspense fallback={<div>Loading......</div>}>
    <CardGrid promise = {promise()}/>    
    </Suspense>
    </>
    );
};

export default App;