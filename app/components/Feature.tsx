type featureProp = {
    icon: any,
    title: string,
    desc: string
}

const Feature = (props: featureProp) => {
    const { icon, title, desc } = props;
  return (
    <>
        <div className="text-white bg-[#212121] flex flex-col text-center items-center py-16 px-8 my-4 rounded-2xl">
            <div className="h-16 w-16 bg-[#8247FF] flex justify-center items-center rounded-2xl">
                {icon}
            </div>
            <h1 className="text-xl font-semibold my-4">{title}</h1>
            <p className="text-[#767575] text-sm">{desc}</p>
        </div>
    </>
  )
}

export default Feature