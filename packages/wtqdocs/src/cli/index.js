#!/usr/bin/env node

// Usage: npx wathqny my-app

import fs  from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// The first argument will be the project name.
const projectName = process.argv[2];

// Create a project directory with the project name.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// A common approach to building a starter template is to
// create a `template` folder which will house the template
// and the files we want to create.
const templateDir = path.resolve(__dirname, '../template/');
fs.cpSync(templateDir, projectDir, { recursive: true });

const projectPackageJson = JSON.parse(fs.readFileSync(path.join(projectDir, 'package.json'), { encoding: "utf-8" }))

// Update the project's package.json with the new project name
projectPackageJson.name = projectName;

fs.writeFileSync(
  path.join(projectDir, 'package.json'),
  JSON.stringify(projectPackageJson, null, 2)
);

console.log('Success! Your new project is ready.');
console.log(`Created ${projectName} at ${projectDir}`);