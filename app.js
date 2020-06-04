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

    handler(argv) {
        notes.addNote(argv.title, argv.body)

    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }

    },
    handler(argv) {
        notes.removeNote(argv.title)

    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        }

    },
    handler(argv)  {
        notes.readNotes(argv.title)

    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes()

    }
})

yargs.parse()