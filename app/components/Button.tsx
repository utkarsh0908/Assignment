

const Button = (props: any) => {
    const { children, type } = props;
  return (
    <button 
      type="button" 
      className={`${type=="primary" && "bg-[#8247FF] hover:bg-purple-800 text-white focus:ring-purple-300"} ${type=="secondary" && "bg-white hover:bg-purple-800 text-black focus:ring-purple-300 border-2"} w-full focus:outline-none focus:ring-4 font-semibold rounded-2xl text-xl px-5 py-3 m-6 md:w-fit`}
    >
      {children}
    </button>
  )
}

export default Button