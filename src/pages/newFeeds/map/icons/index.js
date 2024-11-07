import L from 'leaflet'

export const IconCustom = (props) => {
    const {color = 'blue'} = props
    return new L.ExtraMarkers.icon({
        markerColor: color,
        ...props
    })
}


export default IconCustom
//https://github.com/lennardv2/Leaflet.awesome-markers#screenshots
//https://github.com/coryasilva/Leaflet.ExtraMarkers