import "leaflet-contextmenu";
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";
import {useMap, useMapEvents} from "react-leaflet";
import {useEffect} from "react";

const ContextMenu = (props) => {
    const {onCopy} = props
    const map = useMap()
    useMapEvents({
        contextmenu: (e) => {
            if (map) {
                map.contextmenu.insertItem({
                    text: `${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`,
                    callback: () => {
                        navigator.clipboard.writeText(e.latlng)
                        onCopy()
                    }
                }, 3)
            }
        },
    });

    useEffect(() => {
        if (map) {
            map.on('contextmenu.hide', (e) => {
                map.contextmenu.removeItem(3)
            });
        }
    }, []);
    return null;
};

export default ContextMenu