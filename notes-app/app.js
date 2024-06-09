const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')

// Use yargs library  to define a command for adding a new note \
// through a command-line interface (CLI):

yargs.command({
    command: 'add',
    describe: 'Add a new note',


    // The builder in yargs specifies a command acceptance rules, 
    // defining their requirements, data types, and descriptions. 


    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }

    // define what happens when this command is executed. Take the arguments provided 
    // (argv),which include title and body, and calls the addNote function 
    // from the notes module
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

// yargs is a Node.js library used to handle command-line arguments, 
// making it easier to build interactive command-line tools

// yargs  interacts with custom module by using the functions we've defined, 
// to execute specific tasks when certain conditions are met, 
// enhancing functionality and automation.

// Node.js libraries offer ready-made tools and 
// functions to help developers build applications more efficiently 