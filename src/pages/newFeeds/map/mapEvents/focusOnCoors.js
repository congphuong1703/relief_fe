import {useMap} from "react-leaflet";
import {useEffect} from "react";

function FocusOnCoors({coords}) {
    const map = useMap();
    useEffect(() => {
        map.setView(coords, map.getZoom());
    }, [coords])

    return null;
}

export default FocusOnCoors