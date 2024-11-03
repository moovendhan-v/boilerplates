import mongoose from "mongoose";
import app from "./app";
import env from "./env";
import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

const port = env.PORT;

//#TODO: Connect this after createing a connections string
// mongoose.connect(env.MONGO_CONNECTION_STRING)
//     .then(() => {
//         console.log("Mongoose connected");
//         app.listen(port, () => console.log("Server running on port: " + port));
//     })
//     .catch(console.error);

app.listen(port, () => console.log("Server running on port: " + port));