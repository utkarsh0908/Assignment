import Tag from "./Tag";

const SecondComponent = () => {
  return (
    <>
        <div className="h-screen w-screen flex flex-col justify-center items-center mt-72----">
            <Tag text="premier features"/>
            <h1 className="text-3xl font-semibold mb-6 text-center">Discover our product's <span className="text-[#FE8162]">Capabilities</span></h1>
            <p className="text-center">Don't settle for mediocrity - embrace the future of management with Manage Wise.</p>
            <div className="bg-[#EDEDFA] text-2xl px-12 m-6 rounded-xl py-12 flex font-semibold">
                Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
            </div>
            <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"/>
        </div>
    </>
  )
}

export default SecondComponent