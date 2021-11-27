import {useState, useEffect, useRef} from 'react';
import {
    SecondaryButton,
    Link,
    Scrollable
} from './mod';
import logo from '../assets/logo.svg';


function Hamburguer({toggle, close}) {
    return(
        <div className="flex flex-col justify-around items-end h-4 w-6 cursor-pointer md:hidden" onClick={toggle}>
            <span className={"h-px w-full bg-dark  transition-all duration-500" + (close ? " transform -rotate-45 translate-y-2": "")}></span>
            <span className={"h-px w-2 bg-dark transition-all duration-500" + (close ? " transform rotate-45 -translate-x-3 -translate-y-0.5 scale-0" : "")}></span>
            <span className={"h-px w-4 bg-dark transition-all duration-500" + (close ? " transform rotate-45 scale-x-150 -translate-y-1 -translate-x-1": "")}></span>
        </div>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
  
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

function Nav(){
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
    const closeMobileMenu = () => setMobileMenu(false)
    const ref = useRef();

    useOnClickOutside(ref, () => setMobileMenu(false))

    return (
        <div ref={ref} className="flex justify-around flex-col fixed top-0 right-0 w-screen text-sm min-h-20 transform translate-y-0 translate-x-0  backdrop-filter md:backdrop-blur-sm md:bg-opacity-70 md:bg-light  z-50">
            <div className="flex justify-around items-center flex-col md:flex-row ">
                <span className="flex items-center justify-around w-full bg-light backdrop-blur-md backdrop-filter bg-opacity-70 md:bg-transparent md:backdrop-blur-none z-60">
                    <Scrollable sectionId="HomePage" element={
                        // <p className="my-4 ml-4 mr-12 text-xl text-dark font-display">B.F.</p>
                        <img src={logo} alt="" className="my-1 ml-4 mr-12 h-10 cursor-pointer" />
                    }/>
                    <Hamburguer toggle={toggleMobileMenu} close={mobileMenu}/>
                </span>
                <div className={(mobileMenu ? " backdrop-filter backdrop-blur-md mt-2" : " -translate-y-96 ") + " flex transform justify-around items-center flex-col transition-all py-4 w-full z-10 rounded-xl text-dark bg-light bg-opacity-70 md:translate-y-0  md:flex-row md:w-full md:bg-transparent md:text-dark md:py-0 md:backdrop-blur-none"}>
                    <Scrollable sectionId="Experience" element={
                        <Link  name="Experience" link="/" action={closeMobileMenu}/>
                    }/>
                    <Scrollable  sectionId="Display" element={
                        <Link name="My work" link="/" action={closeMobileMenu}/>
                    }/>
                    <Scrollable sectionId="Contact" element={
                        <SecondaryButton name="Contact" action={closeMobileMenu}/>
                    }/>
                </div>
            </div>
        </div>
    )
}

export default Nav;