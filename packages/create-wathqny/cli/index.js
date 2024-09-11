#!/usr/bin/env node

import fs  from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
import { styleText } from 'node:util';

const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

const templateDir = path.resolve(__dirname, '../template/');
fs.cpSync(templateDir, projectDir, { recursive: true });

const projectPackageJson = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), { encoding: "utf-8" }))

projectPackageJson.name = projectName;

fs.writeFileSync(
  path.join(projectDir, 'package.json'),
  JSON.stringify(projectPackageJson, null, 2)
);

console.log(styleText('green', 'Success! Your new project is ready.'));
console.log(`Created ${projectName} at ${projectDir}`);