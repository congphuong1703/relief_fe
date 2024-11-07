import {LayersControl, MapContainer} from "react-leaflet";
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'
import 'leaflet-extra-markers'
import "leaflet-contextmenu";
import "leaflet-contextmenu/dist/leaflet.contextmenu.css";
import "leaflet-routing-machine";
import GoogleLayer from "./layers/GoogleLayer";
import OSMLayer from "./layers/OSMLayer";
import ContextMenu from "./mapEvents/contextMenu";
import ModalCreateNewPost from "../relief/modalCreateNewPost";
import {useCallback, useMemo, useState} from "react";
import {Form} from "antd";
import ModalAddInfoToPoint from "./modalAddInfoToPoint";
import ShowMakers from "./markers";
import DrawerSidebar from "./sidebars";
import RoutingMachine from "./mapEvents/routeMachine";
import LocationFound from "./mapEvents/locationFound";
import FindCurrentLocation from "./mapEvents/findCurrentLocation";
import FocusOnCoors from "./mapEvents/focusOnCoors";
import DirectCurrentLocation from "./mapEvents/directCurrentLocation";
import L from 'leaflet'
import SearchingLocation from "./searchingLocation";
import ModalLocations from "./searchingLocation/modalLocations";

const {BaseLayer} = LayersControl;
const MapVisualize = (props) => {
    const {notificationApi, messageApi} = props;
    const [isModalPost, setIsModalPost] = useState(false)
    const [isModalAddPoint, setIsModalAddPoint] = useState(false)
    const [formPost] = Form.useForm()
    const [formPoint] = Form.useForm()
    const [markers, setMarkers] = useState([])
    const [coordinateCenter, setCoordinateCenter] = useState([21.015693255672662, 105.80456587236911])
    const [coordinateRoute, setCoordinateRoute] = useState(null)
    const [activeMarker, setActiveMarker] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    const [isLocate, setIsLocate] = useState(false)
    const [isSearch, setIsSearch] = useState(false)

    const onSearch = useCallback((id) => {
        const ele = markers.find((element) => (element.lat + element.lng) === id)
        setActiveMarker(ele);
        setCoordinateCenter([ele.lat, ele.lng])

    }, [markers])
    const onCopy = () => {
        messageApi.success("Sao chép điểm thành công")
        // notificationApi.info({message: 'Sao chép điểm thành công'})
    }
    const onDirection = useCallback((item) => {
        setCoordinateRoute(L.latLng(item[0], item[1]))
        setIsLocate(true)
        setActiveMarker(null)
    }, [])

    const onFinishModalPost = useCallback((data) => {
        console.log("data", data)
    }, [])

    const onOpenModalPost = (e) => {
        console.log("e", e)
        formPost.resetFields()
        setIsModalPost(true)
    }
    const onCancelModalPost = useCallback(() => {
        setIsModalPost(false)
        setIsModalAddPoint(false)
    }, [])

    const onFinishModalAddPoint = useCallback((data) => {
        setMarkers([...markers, data])
        setIsModalAddPoint(false)
    }, [markers])

    const onAddPoint = (e) => {
        console.log("e", e.latlng)
        formPoint.resetFields()
        formPoint.setFieldsValue({
            lat: e.latlng.lat,
            lng: e.latlng.lng,
        })
        setIsModalAddPoint(true)
    }
    const contextMenuItems = useMemo(() => [
        {
            text: 'Chỉ đường',
            callback: function showCoordinates(e) {
                notificationApi.info({
                    message: 'Chỉ đường',
                    placement: 'bottomLeft'
                });
            }
        },
        {
            text: 'Thêm thông tin',
            callback: (e) => onAddPoint(e)
        },
        {
            text: 'Tạo điểm cứu trợ',
            callback: (e) => onOpenModalPost(e)
        },
    ], [notificationApi, onAddPoint, onOpenModalPost])
    return (
        <>
            <MapContainer id="map" zoom={13} center={coordinateCenter}
                          style={{height: '70vh', width: '100%'}}
                          contextmenu={true}
                          contextmenuWidth={140}
                          contextmenuItems={contextMenuItems}
                // maxBounds={bounds}
                // maxBoundsViscosity={1}
            >
                <LayersControl position="topright" collapsed={true}>
                    <BaseLayer checked name="Open Street Map">
                        <OSMLayer />
                    </BaseLayer>
                    <BaseLayer name="Google Satellite">
                        <GoogleLayer type="s" />
                    </BaseLayer>
                    <BaseLayer name="Google Roadmap">
                        <GoogleLayer type="r" />
                    </BaseLayer>
                </LayersControl>
                <ContextMenu onCopy={onCopy} />
                <ShowMakers markers={markers} setActiveMarker={setActiveMarker}
                            setCoordinateCenter={setCoordinateCenter} />
                {activeMarker && <DrawerSidebar onDirection={() => onDirection([activeMarker.lat, activeMarker.lng])}
                                                activeMarker={activeMarker}
                                                setActiveMarker={setActiveMarker} />}
                <RoutingMachine from={coordinateRoute} to={currentLocation} isLocate={isLocate} />
                <LocationFound setCurrentLocation={setCurrentLocation} />
                <DirectCurrentLocation />
                <FocusOnCoors coords={coordinateCenter} />
                <FindCurrentLocation isLocate={isLocate} />
                <SearchingLocation onSearch={onSearch} isSearch={isSearch} setIsSearch={setIsSearch}
                                   markers={markers} />
                <ModalLocations setActiveMarker={setActiveMarker} markers={markers} setCenter={setCoordinateCenter} />
            </MapContainer>
            <ModalCreateNewPost onCancel={onCancelModalPost} isOpen={isModalPost} onFinish={onFinishModalPost}
                                form={formPost} />
            <ModalAddInfoToPoint onCancel={onCancelModalPost} isOpen={isModalAddPoint} onFinish={onFinishModalAddPoint}
                                 form={formPoint} />
        </>
    )
}

export default MapVisualize