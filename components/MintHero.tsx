const mintSoonTimes = 9

const MintHero = () => {
    return (
        <>
            <div className="bg-darkGrey">
                <div className="text-2xl font-bold flex justify-evenly font-Montserrat whitespace-nowrap uppercase flex justify-center items-center overflow-hidden text-white border-t-2 border-b-2 border-cyan pt-2 pb-2"> 
                    {[...Array(mintSoonTimes)].map((e, i) => <span className="busterCards" key={i}>MINT SOON</span>)}
                </div>
            </div>
        </>
    )
}

export default MintHero;