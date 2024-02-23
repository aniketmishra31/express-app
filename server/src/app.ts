import express, { type Request, type Response } from "express";
const app = express();

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello from aniket this side");
});

app.listen(8080, () => {
    console.log("Server running at port 8080");
});