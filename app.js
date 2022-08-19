// npm install serialport --build-from-source -s
// npm install -g node-gyp -s

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const SerialPort = require("serialport");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(port, () => console.log(`server running on port ${port}`));

app.use("/asset", express.static(path.join(__dirname, "asset")));

app.get("/", (req, res) => {
    res.render("page.ejs");
});

var portSerial = new SerialPort("COM3", { baudRate: 9600 }, function(err) {
    if (err) {
        return console.log("Error: ", err.message);
    }
});

io.on("connection", function(client) {
    console.log(`client connected`);
    portSerial.on("data", function(data) {
        if (data) {
            client.emit("eventEmit", function(data) {});
        }
        // console.log("DataSent:", data.toString("utf8"));
    });
    client.on("disconnect", function() {
        console.log(`client disconnected`);
    });
});

var portInfo = SerialPort.list((eRR, Data) => {
    StorePath = Data;
    return StorePath;
});

let info = portInfo.then(r => console.log("w", r[0].comName));
