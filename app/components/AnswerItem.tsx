type itemProp = {
    text: string
}

const AnswerItem = (props: itemProp) => {
    const { text } = props;
  return (
    <div className="text-xl p-3 mx-3 my-2 rounded-xl font-semibold bg-[#f0f0f0]">{text}</div>
  )
}

export default AnswerItem