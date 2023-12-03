import SubComponent from "./SubCommponent"

type subContent = Array<{
    title: string,
    description: string,
    img?: string
}>

const ThirdComponent = () => {
    const subContent: subContent = [
        {
            title: "Smart Task Management",
            description: "Say goodbye to chaos with our smart task management system",
            img: "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png"
        },
        {
            title: "Flexible Scheduling",
            description: "Stay productive with our flexible scheduling system",
            img: "https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png"
        },
        {
            title: "Easy Communication",
            description: "Collaborate seamlessly with your team in real-time",
            img: "https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png"
        },
        {
            title: "Analytics",
            description: "Gain valuable insights with our advanced analytics feature"
        }
    ]
  return (
    <>
        <div className="flex flex-col md:flex-row justify-center items-center">
            {subContent.map((item) => {
                return (
                    <>
                        <SubComponent 
                            title={item.title}
                            description={item.description}
                        />
                        {item.img && <img src={item.img} className="h-10 w-10" alt="upcoming schedule"/>}
                    </>
                )
            })}
        </div>
    </>
  )
}

export default ThirdComponent