import fs from 'fs';
import { Cluster } from './models';

const JSON_FILE_PATH = './clusters.json';

const rawdata = fs.readFileSync(JSON_FILE_PATH, 'utf8');
const json = JSON.parse(rawdata);
const db = json.map((cluster) => new Cluster(cluster));

export default db;
