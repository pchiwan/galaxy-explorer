import express from 'express';
import router from './router';

const app = express();

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
