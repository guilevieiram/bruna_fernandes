import {useState, useEffect} from 'react';

import displayInfo from '../data/display.json';

import RightArrowImage from '../assets/arrow-r.svg';
import LeftArrowImage from '../assets/arrow-l.svg';
const arrowImages = {
    right: RightArrowImage,
    left: LeftArrowImage
}


const Arrow = (side, func) => {
    return (
        <div className={` cursor-pointer absolute px-8 ${side}-0 transform transition-all hover:-translate-y-2 select-none`} onClick={func}>
            <img src={arrowImages[side]} className="h-14 shadow-xl" />
        </div>
    )
}
const RightArrow = ({func}) => Arrow("right", func)
const LeftArrow = ({func}) => Arrow("left", func)


function Label({name}) {
    return (
        <div className="max-w-2xl w-full absolute  bottom-0 flex justify-end" >
            <p className="text-light w-max mx-10 my-8 px-4 py-1 rounded-md shadow-md bg-dark bg-opacity-50 backdrop-blur-sm backdrop-filter ">{name}</p>
        </div>
    )
}

function CarrousselBalls ({numberBalls, selectedBall, changeImage}){

    const ball = (givenClass, onClick) => <div className="p-2" onClick={onClick}><div className={givenClass}></div></div>

    const createBalls = () => {
        let balls = []
        for(let index = 0; index < numberBalls ; index ++){
            let color = index === selectedBall ? "light" : "gray-400"
            let func = index === selectedBall ? ()=>{} : () => {changeImage(index)}
            balls = [...balls, ball(`w-3 h-3 cursor-pointer transition-all rounded-full bg-${color} transform hover:-translate-y-px select-none z-30`, func)]
        }
        return balls
    }

    return(
        <div className="w-full flex justify-center z-20 items-center absolute bottom-0 left-0 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-dark">
            {createBalls()}
        </div>
    )
}

function Carroussel ({displayList}) {
    const numImages = displayList.length;
    const [imageIndex, setImageIndex] = useState(0)
    const changeToImage = (imageNumber) => setImageIndex(imageNumber)
    const imageComponents = displayList.map((item) => {
        new Image().src = item.image; 
        return <img src={item.image} className="object-cover h-screen w-screen "></img>
    })
    
    return (
        <div id="Display" className="relative w-screen max-w-4xl flex justify-around">
            <div className="h-screen w-full max-w-2xl overflow-y-hidden flex justify-center items-center ">
                {imageComponents[imageIndex]}
                <CarrousselBalls numberBalls={numImages} selectedBall={imageIndex} changeImage={changeToImage}/>
                <RightArrow func={() => setImageIndex(Math.abs(imageIndex + 1 ) % numImages)}/>
                <LeftArrow func={() => setImageIndex(Math.abs(imageIndex - 1) % numImages)}/>
                <Label name={displayList[imageIndex].name}/>
            </div>
        </div>

    )
}

function Dysplay () {
    return (
        <div className=" bg-dark flex flex-col justify-start items-center w-screen text-light shadow-inner ">
            <Carroussel 
                displayList={displayInfo}
            />
        </div>
    )
}
export default Dysplay;