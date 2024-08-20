export default function ContactMap(){
    return (
        <div className="flex w-full h-[30rem] md:h-full">
            <div className="w-2/5 bg-[#C00000] flex flex-col text-[#FFFFFF] justify-evenly items-center">
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Call Us</p>
                    <span className="text-base font-normal">+254 700 000 000</span>
                    <span className="text-base font-normal">+254 700 000 000</span>
                </span>
                <span className="text-center">
                    <p className="font-extrabold">Location</p>
                    <span className="text-base font-normal">Moi Avenue ....</span>
                </span>
                <span className="text-center flex flex-col">
                    <p className="font-extrabold">Our Top Services</p>
                    <span className="text-base font-normal">Accounting</span>
                    <span className="text-base font-normal">Assurance</span>
                    <span className="text-base font-normal">Tax Planning and Advisory</span>
                    <span className="text-base font-normal">Advisory</span>
                </span>

            </div>
            <div className="w-3/5">
                <iframe
                    width='100%'
                    height='100%'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173395297017!2d36.82098707352191!3d-1.2834620356200206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6678064cf%3A0x956bb6f5e0ab2aac!2sMoi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1721304507462!5m2!1sen!2ske"
                    style={{border :0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}