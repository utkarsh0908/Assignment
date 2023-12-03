import Tag from "./Tag";
import AnswerItem from "./AnswerItem";

const FifthComponent = () => {
    const items: Array<string> = ["What is Manage Wise and what does it offer?", "Is Manage Wise suitable for small businesses and larger enterprises alike?", "Can I access Manage Wise from different devices and platforms?", "What kind of support options do you offer to users?", "How secure is the data stored within Manage Wise?"];
  return (
    <div className="w-full flex flex-col items-center mt-16 p-4">
        <Tag text="faq"/>
        <h1 className="text-[2.25rem] leading-none mt-2 font-semibold">Need</h1>
        <h1 className="text-[2.25rem] leading-none font-semibold mb-6 text-[#FE8162]">Answer?</h1>
        <p className="text-[#767575] text-center">Check out our most commonly asked questions below to find the information you need.</p>
        <div className="mt-2">
            {items.map((item) => <AnswerItem text={item}/>)}
        </div>
        
    </div>
  )
}

export default FifthComponent