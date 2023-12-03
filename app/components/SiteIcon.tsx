type siteIconProp = {
    icon: string
}

const SiteIcon = (prop: siteIconProp) => {
    const { icon } = prop;
  return (
    <div className="h-16 w-16 bg-[#212121] p-3 flex justify-center items-center rounded-xl">
        <img src={`/${icon}.png`}/>
    </div>
  )
}

export default SiteIcon