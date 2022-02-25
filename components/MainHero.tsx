import MintHero from '../components/MintHero';

const MainHero = () => {
    return (
        <>
            <div className="relative bg-darkGrey">
                <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <img
                            className="h-full w-full object-cover"
                            src="/hero.png"
                            alt="Inside content main hero"
                        />
                    </div>
                </div>
            </div>
            <MintHero/>
        </>
    );
}; 

export default MainHero;