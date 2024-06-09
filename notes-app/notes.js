const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    //create a variable to see if the same note was added the proceed to validate and add or reject and notify

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    //filter processes all items in the array and returns a 
    //new array with all items that pass a test.  In contrast, find would 
    // stop at the first match and only return that single item



    // If the length is different, a note was removed:

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//read the files, convert into a string, and then parses this string into a JavaScript object

// Try/Catch: Manages errors in synchronous
// code is executed in sequence, where each statement waits for the previous one 
// to finish before executing, blocking further execution 
// until all the code in the block has completed.



const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


// The code we created defines a module by bundling together specific functionalities
// (addNote, removeNote, listNotes, and readNote) and making them available 
// for use in other parts of our Node.js app





// functions like addNote or removeNote organizes functionalities
// into modules that can be used anywhere in your app not 
// In contrast, using app.get, app.post in REST APIs is specific to 
// handling HTTP requests from web clients

// HTTP requests define endpoints that respond to interactions from clients 
// These requests often use modules






