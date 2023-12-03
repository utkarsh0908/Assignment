type tag = {
    text: string
}

const Tag = (props: tag) => {
    const { text } = props;
  return (
    <>
        <div className="bg-white border-2 text-[#8247FF] flex justify-center items-center w-fit px-2 py-1 rounded-xl font-semibold uppercase text-xs">
            { text }
        </div>
    </>
  )
}

export default Tag