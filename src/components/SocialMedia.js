import facebook from '../assets/social-media/facebook.png';
import instagram from '../assets/social-media/instagram.png';
import gmail from '../assets/social-media/gmail.png';
import whatsapp from '../assets/social-media/whatsapp.png';

import {useState} from 'react'

function MediaLink({image, hoverName, link}){
    const [hover, setHover] = useState(false)
    const toggleHover = () => setHover(!hover)
    return(
        <a href={link} className="h-6 w-6 m-4 transform transition-all hover:-translate-y-1 flex items-center">
            <img src={image} alt="" title={hoverName} onMouseEnter={toggleHover} onMouseLeave={toggleHover}/>
            <div  className={`px-2 w-max text-sm transform transition-all ${hover ? " translate-x-0 opacity-100 " : " -translate-x-2 opacity-0 "} hover:opacity-100 hover:translate-x-0 hover:underline `}>
                <p className="backdrop-filter backdrop-blur-sm bg-light bg-opacity-30 shadow-lg w-max px-4 py-1 rounded-md">{hoverName}</p>
            </div>
        </a>
    )
}

function SocialMedia(){
    return (
        <div className="flex flex-col justify-around items-center fixed left-0 bottom-0 p-2 z-50">
            <MediaLink image={facebook} link="https://google.com" hoverName="Facebook"/>
            <MediaLink image={instagram} link="https://google.com" hoverName="Instagram"/>
            <MediaLink image={gmail} link="https://google.com" hoverName="E-mail"/>
            <MediaLink image={whatsapp} link="https://google.com" hoverName="Whatsapp"/>
        </div>
    )
}

export default SocialMedia