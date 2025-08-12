import express from "express";
import mongo from "./db/database.js";
import route from "./routes/table_routes.js";
const app = express();
app.use(express.json());
let PORT = 5000;
mongo.then(() => {
    console.log("server is conneted to the database");
})
    .catch((error) => {
    console.log("server is not connected");
});
app.use("/main", route);
app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
});
//# sourceMappingURL=main.js.map