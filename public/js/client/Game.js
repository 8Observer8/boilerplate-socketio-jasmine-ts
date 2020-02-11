define(["require", "exports", "socket.io-client", "../shared/Output"], function (require, exports, io, Output_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game(canvasName) {
            this._socket = io.connect();
            this._socket.on("server_message", function (data) {
                console.log(data);
                Output_1.Output.Instance.Print("JSON message from the remote server: " + JSON.stringify(data));
            });
            var canvas = document.getElementById(canvasName);
            if (canvas) {
                console.log("Ok");
            }
        }
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map