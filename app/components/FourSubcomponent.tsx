import Tag from "./Tag";
import Feature from "./Feature";
import SiteIcon from "./SiteIcon";

type feature = Array<{
  icon: any,
  title: string,
  desc: string
}>

const FourSubcomponent = () => {
  const icons: Array<string> = ["gmail", "slack", "dropbox", "figma", "notion", "gitlab", "vimeo", "zoom", "framer", "github"];
  const features: feature = [
    {
      icon: <svg viewBox="0 0 20 20" fill="currentColor" width="35" height="35"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>,
      title: "Cross-Platform Compatibility" ,
      desc: "Enjoy the flexibility of cross-platform compatibilty. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
    },
    {
      icon: <svg viewBox="0 0 20 20" fill="currentColor" width="35" height="35"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>,
      title: "Stay Informed with Essential Notifications",
      desc: "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
    },
    {
      icon: <svg viewBox="0 0 20 20" fill="currentColor" width="35" height="35"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>,
      title: "Secure Data Encryption at all times",
      desc: "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
    }
  ]
  return (
    <>
        <div className="bg-black pt-8 px-4">
            <div className="my-4">
                <Tag text="and more"/>
            </div>
            <h1 className="text-[2.25rem] leading-none mt-2 font-semibold mb-6 text-white">Explore an array of features that elevate your <span className="text-[#FE8162]">Productivity</span> to new heights</h1>
            <p className="text-[#767575]">Discover the tools that will revolutionize the way you manage and optimize your operations</p>
            {features.map((item) => <Feature 
                icon={item.icon} 
                title={item.title} 
                desc={item.desc}
            />)}
            <div className="flex justify-between px-5">
              {icons.map((item, ind) => {
                if(ind<=4) return <SiteIcon icon={item}/>
              })}
            </div>
            <div className="flex justify-between px-5 mt-2 mb-12">
              {icons.map((item, ind) => {
                if(ind>4) return <SiteIcon icon={item}/>
              })}
            </div>
            <div className="w-full flex justify-center items-center">
              <Tag text="integrations"/>
            </div>
            <h1 className="text-[2rem] leading-none mt-2 font-semibold mb-2 text-white text-center">Enable <span className="text-[#FE8162]">integration</span> with other popular tools and platforms</h1>
            <p className="text-[#767575] text-center mb-12">Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.</p>
            <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"/>
        </div>
    </>
  )
}

export default FourSubcomponent