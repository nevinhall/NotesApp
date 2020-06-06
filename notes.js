const fs = require('fs')
const chalk = require('chalk')


const readNotes =  (title) => {
    const notes = loadNotes()
    const readNote = notes.find((noteToFind) => noteToFind.title === title)
    if(readNote){
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body)
    }else
        console.log(chalk.red('No note found !'))

}

debugger

const addNote = (tile, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((singualrNote) => singualrNote.title === tile)

    if (!duplicateNote) {
        notes.push({
            title: tile,
            body: body
        })

        saveNotes(notes)
        console.log('New note add ')

    }else
        console.log('Note title taken')
}

const removeNote = (title) => {
    console.log('removing ' + title)
    const notes = loadNotes()
    const uniqueNotes  = notes.filter((singualrNote) => singualrNote.title !== title)

    if (uniqueNotes.length === notes.length) {
        console.log(chalk.red('Failed to remove note, note doesnt exist'))
    }else
        console.log(chalk.green('success, note removed'))
        saveNotes(uniqueNotes)




}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue('All notes:'))
    notes.forEach(notes => {
        console.log(notes.title)
    })


}


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes = () => {
    try {
        const  dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)

    }catch (e) {
        return []
    }


}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
