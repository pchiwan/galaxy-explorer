import express from 'express';
import cors from 'cors';
import router, { basePath } from './router';
import * as swaggerUi from 'swagger-ui-express';

import swaggerJson from '../swagger.json';

const app = express();

app.use(cors())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.get('/', basePath);
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
