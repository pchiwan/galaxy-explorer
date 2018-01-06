import fs from 'fs';
import path from 'path'
import { Cluster } from './models';

const JSON_FILE_PATH = './clusters.json';
let db = null;

function load (filePath) {
  const rawdata = fs.readFileSync(filePath, 'utf8');
  const json = JSON.parse(rawdata);
  db = json.map((cluster) => new Cluster(cluster));
}

function write (data) {
  try {
    const dir = path.resolve(__dirname, './tmp')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const tempFilePath = path.resolve(dir, './clusters.json');
    const json = JSON.stringify(data);
    fs.writeFileSync(tempFilePath, json, 'utf8');

    // reload database after reading
    load(tempFilePath);
  } catch (error) {
    throw error;
    return false;
  }
  return true;
}

// initial database load
load(JSON_FILE_PATH);

export default {
  read: () => db,
  write
};
