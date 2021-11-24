import React from 'react'
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoibGFtaW4tamF0dGEiLCJhIjoiY2t2cGE2ajM2MHk0aTJvcWh6dzA5c2Y2MyJ9.RjibudicdtNOypGa0ylbdg";


const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            // style: "mapbox://styles/darkosi/ckvcwq3rwdw431o3i2ho8tph",
            center: [-99.29011, 39.39172],
            zoom: 3,
        });
    }, []);


    return (
        <Wrapper id="map">

        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`