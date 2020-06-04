const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

//Customize yargs
yargs.version('1.1.0')

//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }

    },

    handler: function (argv) {
        notes.addNote(argv.title, argv.body)

    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log('removing a new note...')

    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'Note title'
        }

    },
    handler: function () {
        console.log('read a note')

    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function () {
        console.log('listing all the notes')

    }
})

yargs.parse()