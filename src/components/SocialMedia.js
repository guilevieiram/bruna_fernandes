import facebook from '../assets/social-media/facebook.png';
import instagram from '../assets/social-media/instagram.png';
import gmail from '../assets/social-media/gmail.png';
import whatsapp from '../assets/social-media/whatsapp.png';

function MediaLink({image, hoverName, link}){
    return(
        <a href={link} className="h-6 w-6 m-4 ">
            <img src={image} alt="" title={hoverName} />
        </a>
    )
}

function SocialMedia(){
    return (
        <div className="flex flex-col justify-around items-center fixed left-0 bottom-0 p-2">
            <MediaLink image={facebook} link="https://google.com" hoverName="Facebook"/>
            <MediaLink image={instagram} link="https://google.com" hoverName="Instagram"/>
            <MediaLink image={gmail} link="https://google.com" hoverName="E-mail"/>
            <MediaLink image={whatsapp} link="https://google.com" hoverName="Whatsapp"/>
        </div>
    )
}

export default SocialMedia