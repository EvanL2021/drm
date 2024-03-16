import server from 'bunrest';
import {home} from "./routes";

const app = server();

app.listen(3000, () => {
    console.log("Server started on port 3000");
})

app.get('/', home)