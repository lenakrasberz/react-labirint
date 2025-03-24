import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Labir from "./components/Labir/Labir";
import './ArtBoard.scss'
import { mapGenerate } from "../../helpers/mapGenerate";
import { useState, useRef } from "react";
import Raw from "../../components/Raw/Raw";
import Space from "../../components/Space/Space";
import Wall from "../../components/Wall/Wall";



const ArtBord = ({children}) => {

    const [size, setSize] = useState(15);
    const [map, setMap] = useState(mapGenerate(size));
    const inputRef = useRef(0)
    

    const mapRender = function (mapLabyr) {

        return mapLabyr.map((row, indexRow) => {
            return (
                <Raw key={`id-${indexRow}`}>
                    {
                        row.map((value, indexCall) => value === 1 ? (
                            <Space key={`id-${indexCall}`} y={indexRow} x={indexCall} />
                        ) : (
                            <Wall key={`id-${indexCall}`} y={indexRow} x={indexCall} />
                        ))
                    }
                </Raw>
            )
        })
    }
const handleInputChange = function () {
    setSize(Number(inputRef.current.value))
}
    const handleReset = function () {
        setMap(mapGenerate(size))
    }

    const handleMapSize = function () {
        setMap(mapGenerate(size))
    }
console.log('inpRef', inputRef.current.value)
    const mapItems = mapGenerate(15)
    console.log('mapItems', mapItems)
   

    return (
        <div className="art-board" >
            <Labir>{
              mapRender(map)   
                }

            </Labir>
            <Navigation 
            size={size}
            inputRef={inputRef}
            onReset={handleReset}
            onMapSize={handleMapSize}
            onInputChange={handleInputChange}
            />
        </div>
    )
}


export default ArtBord;
