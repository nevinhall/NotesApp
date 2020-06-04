const fs = require('fs')
const chalk = require('chalk')


const getNotes =  () => {
    return "Your Notes..."
}

const addNote = (tile, body) => {
    const notes = loadNotes()
    const duplicateNotes  = notes.filter( (singualrNote) => singualrNote.title === tile)

    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
