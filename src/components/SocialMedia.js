import {useState} from 'react'

import socialMediaData from '../data/social-media.json';

function MediaLink({image, hoverName, link, key}){
    const [hover, setHover] = useState(false)
    const toggleHover = () => setHover(!hover)
    return(
        <a onMouseEnter={toggleHover} onMouseLeave={toggleHover} href={link} key={key} className="h-6 w-6 m-4 transform transition-all hover:-translate-y-1 flex items-center">
            <img src={image} alt={hoverName}  title={hoverName} />
            <div className={`px-2 w-max text-sm transform transition-all ${hover ? " translate-x-0 opacity-100" : "opacity-0 scale-0"} hover:opacity-100 hover:translate-x-0 hover:underline `}>
                <p className="backdrop-filter backdrop-blur-sm bg-light bg-opacity-30 shadow-lg w-max px-4 py-1 rounded-md">{hoverName}</p>
            </div>
        </a>
    )
}

function SocialMedia(){
    console.log(socialMediaData)
    return (
        <div className="flex flex-col justify-around items-center fixed left-0 bottom-0 p-2 z-50">
            {socialMediaData.map((item, index)=><MediaLink image={item.image} link={item.link} hoverName={item.name} key={index}/>
            )}

        </div>
    )
}

export default SocialMedia