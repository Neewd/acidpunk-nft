import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

const FeatureHero = () => {

    const onMint = () => {

    }

    const onJoinDiscord = () => {

    }

    const onJoinTelegram = () => {
        
    }

    return (
        <>
            <div className="relative bg-darkGrey pt-24 pb-24 overflow-hidden">
                <div className="relative">
                    <div>
                        <img
                            className="absolute -top-24 -left-2"
                            src="/feature-hero-bg-left.png"
                            alt="Inbox user interface"
                        />
                        <img
                            className="absolute -top-24 -right-2"
                            src="/feature-hero-bg-right.png"
                            alt="Inbox user interface"
                        />
                    </div>
                    <div className='flex justify-center font-Xero text-5xl mb-32'>
                        <span className="text-white py-2">
                            What is it 
                        </span>
                        <span className='bg-cyan ml-2 py-2 px-2'>
                            about
                        </span>
                    </div>
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-24 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                            <>
                                <div className="mt-6">
                                    <div className="flex" >
                                        <div className="w-0 h-0 border-solid border-t-[24px] border-l-[0px] border-r-[24px] border-b-[24px] border-cyanTriangleLeft"></div>
                                        <div className="bg-cyan h-12 flex justify-center items-center relative">
                                            <div className="h-4 w-4 bg-darkGrey rounded-full -ml-1"></div>
                                            <h2 className="text-2xl font-bold tracking-tight text-black font-Montserrat uppercase mx-12 tracking-widest font-bold">
                                                This is a title
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-white font-Montserrat font-light">
                                        Bear claw jelly beans marshmallow marshmallow croissant wafer cookie sugar plum bonbon.
                                        Halvah sweet sweet roll liquorice macaroon jelly beans ice cream lollipop.
                                        Tart dessert cupcake candy canes fruitcake. 
                                    </p>
                                    <button className='text-2xl text-white uppercase bg-pinkish font-Montserrat font-bold py-1 px-16 rounded-full mt-8'
                                        onClick={onMint}>
                                        Mint now
                                    </button>
                                </div>
                            </>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className=" relative">
                                <img
                                    className="absolute top-2 left-8 rotate-minus-12 scale-105"
                                    src="/golden_pass.png"
                                    alt="Inbox user interface"
                                />
                                <img
                                    className="absolute top-0 z-10"
                                    src="/golden_pass.png"
                                    alt="Inbox user interface"
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-24 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <div className="flex" >
                                        <div className="bg-cyan h-12 flex justify-center items-center relative">
                                            <h2 className="text-2xl font-bold tracking-tight text-black font-Montserrat uppercase mx-12 tracking-widest font-bold">
                                                Community
                                            </h2>
                                            <div className="h-4 w-4 bg-darkGrey rounded-full -mr-1"></div>
                                        </div>
                                        <div className="w-0 h-0 border-solid border-t-[24px] border-l-[24px] border-r-[0px] border-b-[24px] border-cyanTriangleRight"></div>
                                    </div>

                                    <p className="mt-4 text-lg text-white font-light font-Montserrat w-[430px]">
                                        Bear claw jelly beans marshmallow marshmallow croissant wafer cookie sugar plum bonbon. Halvah sweet sweet roll liquorice macaroon jelly beans ice cream lollipop. Tart dessert cupcake candy canes fruitcake.
                                    </p>
                                    <div className="mt-6 flex">
                                        <button className='text-xl text-white uppercase bg-pinkish font-Montserrat font-bold py-1 px-12 rounded-full'
                                            onClick={onJoinDiscord}>
                                            Join discord
                                        </button>
                                        <button className='ml-4 text-xl text-white uppercase bg-pinkish font-Montserrat font-bold py-1 px-12 rounded-full'
                                            onClick={onJoinTelegram}>
                                            Join telegram
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full relative">
                                <div className='absolute bg-gradient-radial from-cyan h-96 w-96 -right-2 top-24'></div>
                                <img
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src="/cyberpunk_feature.png"
                                    alt="Customer profile user interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-24 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 mb-32">
                        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                            <>
                                <div className="mt-6">
                                    <div className="flex" >
                                        <div className="w-0 h-0 border-solid border-t-[24px] border-l-[0px] border-r-[24px] border-b-[24px] border-cyanTriangleLeft"></div>
                                        <div className="bg-cyan h-12 flex justify-center items-center relative">
                                            <div className="h-4 w-4 bg-darkGrey rounded-full -ml-1"></div>
                                            <h2 className="text-2xl font-bold tracking-tight text-black font-Montserrat uppercase mx-12 tracking-widest font-bold">
                                                Why text here
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-white font-Montserrat font-light">
                                        Bear claw jelly beans marshmallow marshmallow croissant wafer cookie sugar plum bonbon.
                                        Halvah sweet sweet roll liquorice macaroon jelly beans ice cream lollipop.
                                        Tart dessert cupcake candy canes fruitcake. 
                                    </p>
                                </div>
                            </>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0">
                            <div className=" relative">
                                <img
                                    className="absolute top-0 z-10"
                                    src="/market_place_screen.png"
                                    alt="Market place screenshot"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FeatureHero;