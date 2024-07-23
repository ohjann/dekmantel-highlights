import fs from 'fs';
import path from 'path';

export function load({ params }) {
  const filePath = path.join(process.cwd(), 'server', 'data', 'artists.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContents);
  return {
      artists: data
  };
}
