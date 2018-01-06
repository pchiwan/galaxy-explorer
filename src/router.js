import express from 'express';
const {
  getClusterSummary,
  locatePlanet,
  getGasGiants,
  rewriteDatabase
} = require('./business');

const HTTP_OK = 200
const HTTP_INTERNAL_SERVER_ERROR = 500

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

router.post('/write', ((req, res) => {
  const result = rewriteDatabase()
  res.status(result ? HTTP_OK : HTTP_OK)
  res.send()
}));

export default router;
