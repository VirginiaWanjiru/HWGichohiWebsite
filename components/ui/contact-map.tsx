export default function ContactMap(){
    return (
        <div className="flex w-full h-[30rem] md:h-full">
            <div className="w-2/5 bg-[#b91c1c] flex flex-col text-[#FFFFFF] justify-evenly items-center">
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Call Us</p>
                    <span className="text-base font-normal">0713 324558</span>
                    <span className="text-base font-normal">0733 324558</span>
                    <span className="text-base font-normal">0724 256228</span>
                </span>
                <span className="text-center">
                    <p className="font-extrabold">Location</p>
                    <span className="text-base font-normal">Allimex Plaza, 4th Floor, Near Eka Hotel or Nextgen Mall, Mombasa Road, Nairobi</span>
                </span>
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Our Top Services</p><br></br>

                    <span className="text-base font-normal">Accounting</span>
                    <span className="text-base font-normal">Assurance</span>
                    <span className="text-base font-normal">Tax Planning </span>
                    <span className="text-base font-normal">Advisory</span>
                </span>

            </div>
            <div className="w-3/5">
                <iframe
                    width='100%'
                    height='100%'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7485957130043!2d36.84073871059158!3d-1.3268039986550237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1174a3c1e8db%3A0x3704e328dcdce4fd!2sH.%20W.%20Gichohi%20%26%20Co.!5e0!3m2!1sen!2ske!4v1724526847762!5m2!1sen!2ske"
                    style={{border :0}} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}