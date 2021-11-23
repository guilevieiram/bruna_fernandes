import {Link} from './mod.js'

function Footer(){
    return (
        <div className="bg-dark w-screen text-sm text-light py-4 px-10 flex justify-end items-center">
            <Link name="Guile Vieira | 2021" link="https://guile.ga" color="light" highlight="blue"/>
        </div>
    )
}

export default Footer;