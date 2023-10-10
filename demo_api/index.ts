import express, { Request, Response } from 'express';

const app = express();
const appPort = 8001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({test: 'Welcome to the Demo API'})
});

app.listen(appPort, () => console.log(`Demo API is running on ${appPort}`));