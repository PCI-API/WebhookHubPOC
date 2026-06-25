import express, { Application } from 'express';
import { errorHandler } from './middleware/errorHandler';
import clientRoutes from './routes/clientRoutes';

const app: Application = express();

// Sets up the Express app to parse incoming JSON requests
app.use(express.json());

//register routes here...
app.use('/client', clientRoutes)
app.use(errorHandler);

export default app;
