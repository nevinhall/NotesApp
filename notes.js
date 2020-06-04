const fs = require('fs')


const getNotes = function(){
    return "Your Notes..."
}

const addNote = function(tile, body){
    const notes = loadNotes()
    const duplicateNotes  = notes.filter(function(singualrNote){
       return  singualrNote.title === tile
    })

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
const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes = function(){
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
    addNote: addNote
}
