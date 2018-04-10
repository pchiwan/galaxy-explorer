import express from 'express';
import {
  getClusters,
  getClusterSummary,
  locatePlanet,
  getGasGiants
} from './business';

const HTTP_OK = 200
const router = express.Router();

export const basePath = (req, res) => {
  res.status(HTTP_OK);
  res.send(`
    <h1>To infinity and beyond!</h1>
    <p>Check the API docs <a href="/swagger" title="Swagger">here</a></p>
  `);
};

router.get('/', basePath);

router.get('/galaxy', (req, res) => {
  res.status(HTTP_OK);
  res.send(getClusters());
});

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
