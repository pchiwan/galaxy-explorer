import express from 'express';

const app = express();

app.get('/', ((req, res) => {
  res.status(200); // HTTP OK
  res.send('To infinity and beyond!');
}));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
