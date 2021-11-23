import messageArrow from '../assets/arrow-message.svg';
import background from '../assets/choc-3.jpg';

function ContactForm () {

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     // change the credentials
    //     emailjs.sendForm('service_4lzkp5c', 'template_zxgw2ik', e.target, 'user_H5w5JpSw1OBqNALZnAMm5')
    //     .then((result) => {
    //         console.log(result.text);
    //         e.target.reset();
    //         window.alert("Your message has been sent!\n\nI'll contact you as soon as possible!")
    //     }, (error) => {
    //         console.log(error.text);
    //         window.alert("Looks like our servers are down...\n\nTry contacting me on my social media!")
    //     });
    // }

    const sendEmail = (e) => {
        console.log("sent")
    }

    const classBase = "w-full my-4 bg-dark text-light px-4 py-2 text-sm "

    return (
        <form className="flex flex-col justify-around items-end w-full" action="" onSubmit={sendEmail}>
            <input className={classBase} type="email" name='email' placeholder="Email" required />
            <input className={classBase} type="text" name='subject' placeholder="Subject" />
            <textarea className={classBase + "h-40 py-4"} type="text" name='message' placeholder="Message" required />
            <input className='' type="image" alt='' src={messageArrow} value="send" />
        </form>
    )
}

function Contact () {
    return (
        <div className="min-h-screen bg-light w-screen flex justify-center items-center py-20">
            <div className=" max-w-5xl w-full flex justify-start items-center">
                <div className="max-w-md px-5 ml-10 w-full flex flex-col justify-around items-end h-full z-10">
                    <h1 className="mb-20 mr-5 text-3xl ">Lets talk!</h1>
                    <ContactForm />
                </div>
            </div>
            <div className="h-screen cover absolute shadow-inner hidden transform right-0 md:block md:translate-x-40 lg:translate-x-0">
                <img src={background} alt=""  className="h-full w-full left-0 overflow-hidden filter brightness-125  "/>
            </div>
        </div>
    )
}
export default Contact;