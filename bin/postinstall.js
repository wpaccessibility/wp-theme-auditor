#!/usr/bin/env node

const chalk = require( 'chalk' );
const shell = require( 'shelljs' );

const init = () => {
	console.log(
		chalk.green.bold( 'Copying configuration files...' )
	);
};

const copyFiles = () => {
	const sourceDir = `${ process.env.INIT_CWD }/node_modules/@wpaccessibility/wp-theme-auditor`;
	const destinationDir = process.env.INIT_CWD;
	shell.cp( `${ sourceDir }/babel.config.js`, destinationDir );
	shell.cp( `${ sourceDir }/jest.config.js`, destinationDir );
	shell.cp( '-R', `${ sourceDir }/test`, `${ destinationDir }/test` );
	return destinationDir;
};

const success = ( filepath ) => {
	console.log(
		chalk.green.bold( `Configuration files copied to ${ filepath }.` )
	);
};

const run = async () => {
	init();
	const destinationDir = copyFiles();
	success( destinationDir );
};

run();
