import app from "./app";
import cors from "cors";

const port = 3000;

app.use(cors());

app.listen(port, () => {
	console.log(`server is listening at http://localhost:${port}`);
});
