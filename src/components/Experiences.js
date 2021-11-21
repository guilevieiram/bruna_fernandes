import testImage from '../assets/choc-2.jpg'


function Experience ({imagePosition, image, title, description}) {
    const leftImage = {
        left: true,
        right: false,
    }[imagePosition];

    return (
        <div className={"flex justify-start items-center w-full my-20 px-4 " + (leftImage ? "" : "flex-row-reverse")}>
            <img src={image} alt="" className={"h-20 w-20 " + (leftImage ? "mr-4" : "ml-4")}/>
            <div className={(leftImage ? "text-left" : "text-right")}>
                <h1 className="text-lg font-semibold ">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

function Experiences (){
    return (
        <div className="min-h-screen w-screen flex justify-start items-center flex-col bg-light shadow-lg z-30 py-20">
            <h1 className="font-bold text-2xl">Experiences</h1>
            <div className="h-px w-1/2 mt-10 bg-dark"></div>
            <div className="max-w-xl w-full">
                <Experience imagePosition='left' image={testImage} title="Cordon bleau London" description="hahahasonasdon sodincwe odncijp ckwnc"/>
                <Experience imagePosition='right' image={testImage} title="Cordon bleau London" description="hahahasonasdon sodincwe odncijp ckwnc"/>
                <Experience imagePosition='left' image={testImage} title="Cordon bleau London" description="hahahasonasdon sodincwe odncijp ckwnc"/>
                <Experience imagePosition='right' image={testImage} title="Cordon bleau London" description="hahahasonasdon sodincwe odncijp ckwnc"/>
                <Experience imagePosition='left' image={testImage} title="Cordon bleau London" description="hahahasonasdon sodincwe odncijp ckwnc"/>
            </div>
        </div>
    )
}

export default Experiences;