#!/usr/bin/env node

const chalk = require('chalk');
const CleanCSS = require('clean-css');
const fs = require('fs');
const shell = require('shelljs');

const generator = require('./components/generator.js');
const config = require('./default/config.js');

const init = () => {
  let css = '';
  const pathIndex = process.argv.indexOf('-out');
  const cleanCSS = new CleanCSS();

  if (pathIndex <= 0 && !config.hasOwnProperty('outputPath')) {
    console.log(
      chalk.red(
        `Please determine a path. You can do this by passing the path with a '-out' option or setting 'outputPath' in your config.`
      )
    );
    console.log(chalk.blue('Exiting.'));
    return;
  }

  const outputPath = config.outputPath || process.argv.slice(pathIndex + 1)[0];

  if (outputPath.indexOf('.css') < 0) {
    console.log(chalk.red(`Please add a css file to your path.`));
    console.log(chalk.red(`Example: path/to/my/folder/tokens.css`));
    console.log(chalk.blue('Exiting.'));
    return;
  }

  css += generator(config, ['responsive', 'standard']);

  Object.keys(config.breakpoints).forEach(key => {
    css += `
      @media (min-width: ${config.breakpoints[key]}) {
        ${generator(config, ['responsive'], `${key}:`)}
      }
    `.trim();
  });

  css = cleanCSS.minify(css).styles;

  // Create the directory if it doesn't already exist
  if (!fs.existsSync(outputPath)) {
    shell.exec(`mkdir -p ${outputPath.replace(/[^\/]*$/, '')}`);
  }

  shell.exec(`echo "${css}" > ${outputPath}`);
};

init();
