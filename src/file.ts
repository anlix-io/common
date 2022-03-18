/**
 * All the file handling functions that can be used globally by all Anlix
 * projects using Node.JS (with TS compiler too)
 *
 * This file have side-effects
 *
 * @since 0.2.0
 */
import fs from 'fs';

/**
 * @category file-handling
 * @since 0.2.0
 */
export const exportJSONToFile = (json: Object | string) => {
  let jsonFile = '';
  if (typeof json === 'object') {
    jsonFile = JSON.stringify(json);
  }
  fs.writeFileSync('jsonFile.json', jsonFile);
}
