import express, { Request, Response } from "express";

const app = express();
const PORT = 5001;

app.get('/', (req: Request, res: Response) => {
    res.send(`sophia's website coming soon...`);
});

app.listen(PORT);