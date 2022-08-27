import { storageService } from "./storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const noteService = {
    query,
    getRemovedNotes,
    getNoteById,
    updateNote,
    addNote,
    removeNote
}

const NOTES_KEY = 'notesDB'
const REMOVED_KEY = 'removedNotesDB'

// change to function get Notes
let gNotes = _loadFromStorage(NOTES_KEY) || _getNotes()
let gRemovedNotes = _loadFromStorage(REMOVED_KEY) || []

function query() {
    // gNotes = _loadFromStorage(NOTES_KEY) || _getNotes()
    // save - do I need it ???
    _saveToStorage(NOTES_KEY, gNotes)

    // let notes = _loadFromStorage(STORAGE_KEY) || gNotes
    // _saveToStorage(notes)

    // if (filterBy) {
    //     let { title, minPrice, maxPrice } = filterBy
    //     if (!minPrice) minPrice = 0
    //     if (!maxPrice) maxPrice = 200
    //     books = books.filter(book => (
    //         book.title.includes(title) &&
    //         book.listPrice.amount >= minPrice &&
    //         book.listPrice.amount <= maxPrice
    //     ))
    // }

    return Promise.resolve(gNotes)
}

function getRemovedNotes() {
    return Promise.resolve(gRemovedNotes)
}

function getNoteById(noteId) {
    if (!noteId) return Promise.resolve(null)
    const note = gNotes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function updateNote(updatedNote) {
    gNotes = gNotes.map(note => note.id === updatedNote.id ? updatedNote : note)
    _saveToStorage(NOTES_KEY, gNotes)
    return Promise.resolve(updatedNote)
}

function addNote(type, info, classBgColor) {
    const newNote = {
        id: utilService.makeId(),
        type,
        isPinned: false,
        info,
        classBgColor
    }

    gNotes.unshift(newNote)
    _saveToStorage(NOTES_KEY, gNotes)

    return Promise.resolve(newNote)
}

function removeNote(noteId) {
    // add removed note to array - gRemovedNotes
    _addRemovedNoteToStorage(noteId)

    // remove note from array - gNotes
    gNotes = gNotes.filter(note => noteId !== note.id)
    // console.log('remove gNotes:', gNotes);
    _saveToStorage(NOTES_KEY, gNotes)

    return Promise.resolve()
}

function _addRemovedNoteToStorage(noteId) {

    getNoteById(noteId).then(note => {
        gRemovedNotes.unshift(note)
        // console.log('gRemovedNotes:', gRemovedNotes);
        _saveToStorage(REMOVED_KEY, gRemovedNotes)
    })
}

function _getNotes() {
    return [
        {
            id: 'n101',
            type: 'note-txt',
            isPinned: true,
            info: {
                txt: 'Fullstack Me Baby!'
            },
            classBgColor: 'bg-pink'
        },
        {
            id: 'n102',
            type: 'note-img',
            // isPinned: true,
            info: {
                url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                title: 'Bobi and Me'
            },
            classBgColor: '',
            style: {
                backgroundColor: '#29294'
            }
        },
        {
            id: 'n103',
            type: 'note-todos',
            // isPinned: true,
            info: {
                label: 'Get my stuff together',
                todos: [
                    { txt: 'Driving liscence', doneAt: null },
                    { txt: 'Coding poewr', doneAt: 187111111 }
                ]
            },
            classBgColor: ''
        }
    ]
}

function _saveToStorage(STORAGE_KEY, notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}

function _loadFromStorage(STORAGE_KEY) {
    return storageService.loadFromStorage(STORAGE_KEY)
}