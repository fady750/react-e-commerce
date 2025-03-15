function Footer() {
    const FooterContent = [
    {
        title:"Company",
        links:["About Us","Contact Us","Store Location","Careers"],
    },
    {
        title:"Help",
        links:["Order Tracking", "FAQs", "Privacy Policy", "Terms & Conditions"]
    },
    {
        title:"Store",
        links:["Women", "Men", "Shoos"]
    },
    {
        title:"Keep In Touch",
        links:["New Cairo First Section, Cairo Governorate", "+01234567890", "Open All Days- 9:00 AM ~ 11:00 PM"]
    }
    ]
    return (
        <div className="py-16 border-t-2 border-gray-100 ">
            <footer className=" flex flex-col sm:flex-row justify-between px-12">
                {FooterContent.map((ele,idx )=>{
                    return(
                        <div className="" key={idx} >
                            <h3 className="mb-[0.75rem] text-gray-600">{ele.title}</h3>
                            <div className="flex flex-col items-start justify-between gap-3" >
                                {ele.links.map((item, idx)=><p key={idx}>{item}</p>)}
                            </div>
                        </div>
                    )
                })}
            </footer>
        </div>

    )
}

export default Footer





