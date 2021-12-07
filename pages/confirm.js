import { useEffect, React} from 'react'
import tw from "tailwind-styled-components";
import Map from './component/Map';

const confirm = () => {

    const getCoordinates = () => {
        const location = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/`,$(location).json)
        .then(response => response.json())
        .then(data => console.log(data));

    }

    useEffect(() => {

        getCoordinates()
        
    }, [])


    return (
        <Wrapper>
            {/* Map */}
            <Map />
            <RideContainer>
                {/* Ride Selector */}

                {/* Confirm Button */}
            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1 
`