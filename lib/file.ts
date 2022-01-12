import fs from 'fs';

export const exportJSONToFile = (json: Object | string) => {
  let jsonFile = '';
  if (typeof json === 'object') {
    jsonFile = JSON.stringify(json);
  }
  fs.writeFileSync('jsonFile.json', jsonFile);
}
