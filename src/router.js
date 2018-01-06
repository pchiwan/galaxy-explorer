import express from 'express';
const {
  getClusterSummary,
  locatePlanet,
  getGasGiants
} = require('./business');

const HTTP_OK = 200
const router = express.Router();

router.get('/', ((req, res) => {
  res.status(HTTP_OK);
  res.send('To infinity and beyond!');
}));

router.get('/clusters/:clusterName/systems', (req, res) => {
  res.status(HTTP_OK);
  res.send(getClusterSummary(req.params.clusterName));
});

router.get('/locate/:planetName', ((req, res) => {
  res.status(HTTP_OK);
  res.send(locatePlanet(req.params.planetName));
}));

router.get('/gasgiants', ((req, res) => {
  res.status(HTTP_OK);
  res.send(getGasGiants());
}));

export default router;
