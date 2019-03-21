#!/usr/bin/env node

const chalk = require( 'chalk' );
const handlebars = require( 'handlebars' );
const inquirer = require( 'inquirer' );
const shell = require( 'shelljs' );

const init = () => {
	console.log(
		chalk.green.bold( 'Creating test cases...' )
	);
};

const getTestCaseDetails = () => {
	const questions = [
		{
			type: 'list',
			name: 'POSTTYPE',
			message: 'What is the post type?',
			choices: [ 'post', 'page' ],
			filter( val ) {
				return val.split( '.' )[ 1 ];
			},
		},
		{
			name: 'SLUG',
			type: 'input',
			message: 'What is the slug of the post or page?',
		},
		{
			name: 'TITLE',
			type: 'input',
			message: 'What is the title of the post or page?',
		},
	];
	return inquirer.prompt( questions );
};

const doItAgain = () => {
	const question = [
		{
			name: 'AGAIN',
			type: 'confirm',
			message: 'Create another test case?',
		},
	];
	return inquirer.prompt( question );
};

const createFile = ( posttype, slug, title ) => {
	const query = ( posttype === 'page' ) ? 'pagename' : 'name';
	const tpl = shell.cat( `${ process.cwd() }/test/support/test.hbs` ).toString();
	const data = {
		title,
		query,
		slug,
	};
	const template = handlebars.compile( tpl );
	const filePath = `${ process.cwd() }/test/${ slug }.test.js`;
	new shell.ShellString( template( data ) ).to( filePath );
	return filePath;
};

const success = ( filepath ) => {
	console.log(
		chalk.green.bold( `Test case created at ${ filepath }.` )
	);
};

const createTestCase = async () => {
	const answers = await getTestCaseDetails();
	const { POSTTYPE, SLUG, TITLE } = answers;
	const filePath = createFile( POSTTYPE, SLUG, TITLE );
	success( filePath );
	const answer = await doItAgain();
	const { AGAIN } = answer;
	if ( AGAIN ) {
		createTestCase();
	}
};

const run = async () => {
	init();
	createTestCase();
};

run();
