import {useEffect} from "react";
import {useMap} from "react-leaflet";

const LocationFound = (props) => {
    const {setCurrentLocation} = props
    const map = useMap();
    useEffect(() => {
        map.on('locationfound', function (e) {
            setCurrentLocation(e.latlng);
            map.stopLocate();
        });
    }, [map])
}

export default LocationFound