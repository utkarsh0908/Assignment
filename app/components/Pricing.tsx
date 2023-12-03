import Tag from "./Tag";
import Plan from "./Plan";

const Pricing = () => {
  const Features = [
    ["Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support"], 
    ["Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support", "3+ integrations", "Account performance reporting"], 
    ["Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support", "3+ integrations"]];
  return (
    <div className="flex flex-col w-full items-center justify-center p-4">
        <Tag text="pricing"/>
        <h1 className="text-center text-[2.25rem] leading-none mt-2 font-semibold mb-2">Select your ideal <span className="text-[#FE8162]">Pricing</span> plan</h1>
        <p className="text-center">At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.</p>
        <div className="flex flex-col md:flex-row md:w-full justify-around">
        <Plan 
          name="free"
          price={0}
          features={Features[0]}
          />
        <Plan 
          name="standard"
          price={25}
          features={Features[1]}
          />
        <Plan 
          name="business"
          price={42}
          features={Features[2]}
          />
        </div>
    </div>
  )
}

export default Pricing