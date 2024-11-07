import {useCallback, useEffect, useState} from "react";
import {io} from "socket.io-client";

let SOCKET_BASE_URL = "http://localhost:9092?token=abc123&userId=" + Math.random();

export const useSocket = () => {
    const [socket, setSocket] = useState();
    const [socketResponse, setSocketResponse] = useState();
    const [isConnected, setConnected] = useState(false);
    const sendData = useCallback(
        (payload) => {
            socket.emit("chat", {
                type: payload.type,
                body: payload.body,
                userId: payload.userId
            });
        },
        [socket]
    );
    useEffect(() => {
        const s = io(SOCKET_BASE_URL, {
            reconnection: false
        });
        setSocket(s);
        s.on("connect", () => setConnected(true));
        s.on("chat", (res) => {
            setSocketResponse(res);
        });
        return () => {
            s.disconnect();
        };
    }, []);

    return {socketResponse, isConnected, sendData};
};