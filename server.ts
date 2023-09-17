import express, {Application} from 'express';

import routes from './routes/index';

const app: Application = express();
const port: number =Number(process.env.PORT) || 8000;

app.use('/', routes);

app.listen(port, () => (
    console.log('server running on port ${port}')
))