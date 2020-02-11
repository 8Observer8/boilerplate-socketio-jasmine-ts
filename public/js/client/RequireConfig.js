requirejs.config({
    baseUrl: "js/client",
    paths: {
        "socket.io-client": "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io"
    }
});
requirejs(["Program"], function () { });
//# sourceMappingURL=RequireConfig.js.map