const people = [
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: 'team-example-1.png',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Lindsay Lohan',
        role: 'Front-end Developer',
        imageUrl: 'team-example-1.png',twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Shirley Walton',
        role: 'Front-end Developer',
        imageUrl: 'team-example-1.png',
        twitterUrl: '#',
        linkedinUrl: '#',
    }
]
  
const TeamHero = () => {
    return (
        <>
            <div className="bg-darkGrey relative">
                <div className="absolute top-0 left-0 w-full">
                    <img className="object-cover w-full" src="team-wrapper.png" alt="" />
                </div>
                <div className="absolute top-16 left-0">
                    <img className=" h-[450px]" src="grid-left-team.png" alt="" />
                </div>
                <div className="absolute top-16 right-0">
                    <img className=" h-[450px]" src="grid-right-team.png" alt="" />
                </div>
                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12 relative">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-Xero text-white tracking-widest text-center">Team</h2>
                        </div>
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 px-32 -m-b-12"
                        >
                            {people.map((person) => (
                            <li key={person.name}>
                                <div className="">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                    </div>                                
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamHero;