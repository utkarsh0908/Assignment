import Tag from "./Tag";

type planProp = {
    name: string,
    price: number,
    features: Array<string>
}

const Plan = (props: planProp) => {
    const {name, price, features} = props;
  return (
    <div className="md:w-[30%] mt-4 mb-8 border bg-[#ededfa] py-16 w-full flex flex-col px-8 rounded-2xl">
        <Tag text={name}/>
        <h1 className="mt-2"><span className="text-3xl font-semibold">{`$${price}`}</span>/month</h1>
        <ul className="mt-4">
            {features.map((item) => <li className="text-sm my-2">{item}</li>)}
        </ul>
        <button className="p-2 border mt-6 w-fit bg-white rounded-xl font-semibold">Get started</button>
    </div>
  )
}

export default Plan