import {useMap} from "react-leaflet";
import {useEffect} from "react";

const FindCurrentLocation = (props) => {
    const {isLocate} = props;
    const map = useMap();
    useEffect(() => {
        if (map && isLocate) {
            map.locate({setView: true});
        }
    }, [isLocate])
}
export default FindCurrentLocation