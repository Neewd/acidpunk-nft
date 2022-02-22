const steps = [
    {
        name: 'Step 1',
        text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
        name: 'Step 2',
        text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    },
    {
        name: 'Step 3',
        text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    }
]

const RoadmapHero = () => {
    return (
        <>
            <div className="bg-white" id="roadmap">
                <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-16">
                        <span className="block">Roadmap</span>
                    </h2>
                    <div className="space-y-12">
                        {steps.map(step => (
                            <div className=""
                                key={step.name}>
                                <h3 className="text-xl mb-6">{step.name}</h3>
                                <p className="">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default RoadmapHero;