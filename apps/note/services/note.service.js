import { storageService } from "./storage.service.js"

export const noteService = {
    query
}

const STORAGE_KEY = 'notesDB'

let gNotes = [
    {
        id: 'n101',
        type: 'note-txt',
        isPinned: true,
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'note-img',
        // isPinned: true,
        info: {
            // url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
            url: '../../assets/img/note/test.jpg',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColoe: '#29294'
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
        }
    }
]

function query() {
    let notes = _loadFromStorage(STORAGE_KEY) || gNotes
    _saveToStorage(notes)

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

    return Promise.resolve(notes)
}

function _loadFromStorage() {
    storageService.loadFromStorage()
}

function _saveToStorage(notes) {
    storageService.saveToStorage(STORAGE_KEY, notes)
}