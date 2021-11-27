import {useState} from 'react'
import {Link as ScrollLink} from 'react-scroll';


function PrimaryButton({name, classes, action=()=>{}}){
    return (
        <div onClick={action} className={"flex justify-center items-center rounded-full py-2 px-8 mx-4 my-2 w-max shadow-md cursor-pointer bg-primary text-light transition-all transform hover:-translate-y-1 filter brightness-110" + classes}>
            {name}
        </div>
    )
}

function SecondaryButton({name, classes, action=()=>{}}){
    return (
        <div onClick={action} className={"flex justify-center items-center rounded-full py-2 px-8 mx-4 my-2 w-max  bg-transparent border text-primary border-primary shadow-md  cursor-pointer transition-all transform hover:-translate-y-1 " + classes}>
            {name}
        </div>
    )
}

function Link({name, link, action=()=>{}, color='dark', highlight='primary'}) {
    return(
        <a href={link} onClick={action} className={`px-4 py-2 text-center text-${color} w-max transition-all hover:underline hover:text-${highlight}`}>{name}</a>
    )
}

function Scrollable({element, sectionId}){
    return (
        <div className="py-2">
            <ScrollLink to={sectionId} spy={true} smooth={true} >{element}</ScrollLink>
        </div>
    )
}


function DropDown({name, links}) {
    const [open, setOpen] = useState(false)
    const toggleTag = () => setOpen(!open)

    return(
        <div className="  flex flex-col justify-around items-center w-full " key={name}>
            <p onClick={toggleTag} className=" px-4 py-2 cursor-pointer w-max hover:underline ">
                {name} <span className="text-primary text-lg md:text-light">{open ? " ▴ " : " ▾ "}</span>
            </p>
            <div className={(open ? " " : "absolute scale-y-0" ) + "  bg-gray-300  w-max px-8 rounded-lg flex flex-col justify-around items-center transform md:absolute md:translate-y-full md:text-text" + (!open ? " scale-y-0" : "")}>
                {links.map((link) => link)}
            </div>
        </div>

    )
}  

export {
    PrimaryButton,
    SecondaryButton,
    Link,
    DropDown,
    Scrollable
}  ;