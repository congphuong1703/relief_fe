import {Marker} from "react-leaflet";
import {ICON_TYPE} from "../../../../constants";
import IconCustom from "../icons";
import React from 'react'

const ShowMakers = React.memo((props) => {
    const {setActiveMarker, markers, setCoordinateCenter} = props
    return (
        <>
            {markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}
                        bubblingMouseEvents
                        eventHandlers={{
                            click: () => {
                                setActiveMarker(marker);
                                setCoordinateCenter([
                                    marker.lat,
                                    marker.lng
                                ])
                            },
                        }}
                        icon={IconCustom({icon: 'fa-circle', prefix: ICON_TYPE.FONTAWESOME})} />
            ))}
        </>
    )
})

export default ShowMakers