const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes.js')

//Customize yargs
yargs.version('1.1.0')

//add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function () {
        console.log('adding a new note...')

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
console.log(process.argv)
console.log(yargs.argv)
