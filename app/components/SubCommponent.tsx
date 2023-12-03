type subComp = {
    title: string,
    description: string
}

const SubComponent = (props: subComp) => {
    const { title, description} = props;
  return (
    <div className="w-[80%] my-4">
        <h1 className="font-bold text-xl">{ title }</h1>
        <p>{ description }</p>
    </div>
  )
}

export default SubComponent