
import * as io from "socket.io-client";
import { Output } from "../shared/Output";

export class Game
{
    private _socket: SocketIOClient.Socket;

    public constructor(canvasName: string)
    {
        this._socket = io.connect();

        this._socket.on("server_message", (data) =>
        {
            console.log(data);
            Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
        });

        let canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        if (canvas)
        {
            console.log("Ok");
        }
    }
}