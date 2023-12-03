import Tag from "./Tag";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center px-2">
        <Tag text="welcome to manage wise!"/>
        <h1 className="text-5xl font-semibold mb-6">Empower your business with <span className="text-[#FE8162]">Strategic</span> insights</h1>
        <p>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</p>
        <Button type="primary">Get Started</Button>
        <Button type="secondary">Watch Demo</Button>
        <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024" className="border rounded-md mt-12"/>
    </div>
  )
}

export default Hero