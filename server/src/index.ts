import express, { Request, Response, Express } from "express";
import path from 'path';
import { ProjectData } from "./types";

const app: Express = express();
const PORT = 5001;

// Some example project data
const projects: ProjectData = {
  "example project": {
    "name": "example project",
    "urlPath": "example-project",
    "shortDescription": "This is some sample data to test out the projects UI.",
    "completed": false
  }
}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json());
// Enable CORS for the frontend so it can call the backend
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("successful");
});

app.get('/projects', (req: Request, res: Response) => {
    res.status(200).send(projects);
});

//fallback route
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}`);
});