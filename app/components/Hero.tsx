import Tag from "./Tag";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-screen bg-[#fdf2ed] w-screen flex flex-col justify-center items-center text-center px-2 md:mt-52">
        <Tag  text="welcome to manage wise!"/>
        <h1 className="text-5xl md:text-[5rem] md:w-[80%] font-semibold mb-6 bg-[#fdf2ed]">Empower your business with <span className="text-[#FE8162]">Strategic</span> insights</h1>
        <p className="md:text-xl md:w-[50%]">Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
        <div className="flex md:w-full justify-center">
          <Button type="primary">Get Started</Button>
          <Button type="secondary">Watch Demo</Button>
        </div>
        <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024" className="border rounded-md mt-12"/>
    </div>
  )
}

export default Hero