import { Suspense } from 'react';
import type { CardType } from './Type'
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import CardGrid from './Component/AvailableLanguage/CardGrid';
import Footer from './Component/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from 'react-toastify';

const promise = async (): Promise<CardType[]> => {
    const res = await fetch("../public/LanguageData.json");
    const data = await res.json();
    return data;
}

const App = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Suspense fallback={<div>Loading......</div>}>
                <CardGrid promise={promise()} />
            </Suspense>
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default App;