import {useState, useEffect} from 'react';

import testImage from '../assets/choc-2.jpg';
import testImage2 from '../assets/desk-1.png';
import testImage3 from '../assets/desk-3.png';

import RightArrowImage from '../assets/arrow-r.svg';
import LeftArrowImage from '../assets/arrow-l.svg';
const arrowImages = {
    right: RightArrowImage,
    left: LeftArrowImage
}


const Arrow = (side, func) => {
    return (
        <div className={`absolute mx-2  ${side}-0`} onClick={func}>
            <img src={arrowImages[side]} className="h-14" />
        </div>
    )
}
const RightArrow = ({func}) => Arrow("right", func)
const LeftArrow = ({func}) => Arrow("left", func)


function Label({name}) {
    return (
        <div className="max-w-2xl w-full absolute  bottom-0 flex justify-end" >
            <p className="text-light w-max px-10 py-8">{name}</p>
        </div>
    )
}

function CarrousselBalls ({numberBalls, selectedBall, changeImage}){

    const baseClass = "w-3 h-3 rounded-full ";
    const ball = (givenClass, onClick) => <div className="p-2" onClick={onClick}><div className={givenClass}></div></div>

    const createBalls = () => {
        let balls = []
        for(let index = 0; index < numberBalls ; index ++){
            balls = [...balls, ball(baseClass + "bg-light", () => {changeImage(index)})]
        }
        balls[selectedBall] = ball(baseClass + "bg-gray-500", ()=>{})
        return balls
    }

    return(
        <div className="w-full flex justify-center items-center absolute bottom-0 left-0 ">
            {createBalls()}
        </div>
    )
}

function Carroussel ({imagesList}) {
    const numImages = imagesList.length;
    const [image, setImage] = useState(imagesList[0])
    const [imageIndex, setImageIndex] = useState(0)
    useEffect(() => {
        setImage(imagesList[imageIndex])
    }, [imageIndex])
    const changeToImage = (imageNumber) => setImageIndex(imageNumber)


    return (
        <div className="relative w-screen max-w-4xl flex justify-around">
            <div className="h-screen w-full max-w-2xl overflow-y-hidden flex justify-center items-center ">
                <img src={image} alt="" className="object-cover h-screen w-screen" />
                <CarrousselBalls numberBalls={numImages} selectedBall={imageIndex} changeImage={changeToImage}/>
                <RightArrow func={() => setImageIndex((imageIndex + 1 ) % numImages)}/>
                <LeftArrow func={() => setImageIndex((imageIndex - 1) % numImages)}/>
                <Label name="Test Name"/>
            </div>
        </div>

    )
}

function Dysplay () {
    return (
        <div className=" bg-dark flex flex-col justify-start items-center w-screen text-light ">
            <Carroussel 
                imagesList={[testImage3, testImage, testImage3, testImage]}
            />
        </div>
    )
}
export default Dysplay;