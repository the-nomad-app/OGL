// create a express application
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/database");
const routes = require("./routes");
const { User } = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");


// initialize pusher
const pusher = new Pusher({
    appId: "1162234",
    key: "9fc95fa77ecdd821257a",
    secret: "a695e432e435446474cc",
    cluster: "us3",
    useTLS: true
});

// const bodyParser = require('body-parser')
// const Pusher = require('pusher');

// // initialize pusher
// const pusher = new Pusher({
//     appId: "1162234",
//     key: "9fc95fa77ecdd821257a",
//     secret: "a695e432e435446474cc",
//     cluster: "us3",
//     useTLS: true
// });

// pusher.trigger("my-channel", "my-event", {
//     message: "hello world"
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // to Allow CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// });

// app.post('/pusher/auth', (req, res) => {
//     let socketId = req.body.socket_id;
//     let channel = req.body.channel_name;
//     random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
//     let presenceData = {
//         user_id: random_string,
//         user_info: {
//             username: '@' + random_string,
//         }
//     };
//     let auth = pusher.authenticate(socketId, channel, presenceData);
//     res.send(auth);
// });

// app.post('/update-location', (req, res) => {
//     // trigger a new post event via pusher
//     pusher.trigger('presence-channel', 'location-update', {
//         'username': req.body.username,
//         'location': req.body.location
//     })
//     res.json({ 'status': 200 });
// });

// let port = 3128;
// app.listen(port);
// console.log('listening');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
require("./config/passport")(User);
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(config.database);
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
