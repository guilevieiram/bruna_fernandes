import{
    PrimaryButton,
    SecondaryButton,
    Scrollable
} from './mod.js';



function Intro() {
    return (
        <div className="flex flex-col justify-around items-end px-10">
            <h1 className="text-5xl font-display">Bruna</h1>
            <h1 className="text-5xl pb-8 font-display">Fernandes</h1>
            <p className="text-sm">Chocolatier & Patissier</p>
        </div>
    )
}

function Buttons() {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center px-5">
            <Scrollable sectionId="Experience" element={
                <SecondaryButton name="See more!" />
            }/>
            <Scrollable sectionId="Contact" element={
                <PrimaryButton name="Lets talk!"/>
            }/>
        </div>
    )
}

function BackgroundImage () {
    const BackgroundHome = 'https://github.com/guilevieiram/bruna_fernandes/blob/main/src/assets/choc-1-right.jpg?raw=true'
    return (
        <div className="fixed left-0 top-0 transform -translate-x-1/2 h-screen  sm:translate-x-0 shadow-inner-lg overflow-hidden" style={{zIndex: -10}}>
            <img src={BackgroundHome} alt="background" className=" w-full h-full"/>
        </div>
    )
}
 
function HomePage () {
    return (
        <div id="HomePage" className="h-screen py-20 w-screen flex justify-around items-center">
            <BackgroundImage />
            <div className=" max-w-screen-md w-full h-full flex flex-col justify-around items-end z-10">
                <Intro />
                <Buttons />
            </div>
        </div>
    )
}

export default HomePage;