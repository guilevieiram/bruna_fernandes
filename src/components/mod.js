import {useState} from 'react'

function PrimaryButton({name, classes}){
    return (
        <div className={"flex justify-center items-center rounded-full py-2 px-8 mx-4 my-2 w-max font-bold shadow-md cursor-pointer bg-primary text-light transition-all transform hover:-translate-y-1 " + classes}>
            {name}
        </div>
    )
}

function SecondaryButton({name, classes}){
    return (
        <div className={"flex justify-center items-center rounded-full py-2 px-8 mx-4 my-2 w-max  bg-transparent border-2 text-primary border-primary shadow-md font-bold cursor-pointer transition-all transform hover:-translate-y-1 " + classes}>
            {name}
        </div>
    )
}

function Link({name, link}) {
    return(
        <a href={link} className="px-4 py-2 text-center text-dark w-max transition-all hover:underline hover:text-primary ">{name}</a>
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
    DropDown
}  ;