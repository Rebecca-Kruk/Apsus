import { storageService } from '../../../services/storage.service.js'

export const emailService = {
    getMail,
    getCriteria,
    query,
    getLoggedinUser,
    remove,
}

const KEY = 'emailsDB'

function query(filterBy) {
    let emails = storageService.loadFromStorage(KEY) || gMails
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve(emails)
}

function remove(emailId) {
    let emails = storageService.loadFromStorage(KEY) || gMails
    emails = emails.filter(email => email.id !== emailId)
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve()
}


const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    to: 'momo@momo.com'
}

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    lables: ['important', 'romantic'] // has any of the labels
}


function getMail() {
    return gMails
}

function getCriteria() {
    return criteria
}

function getLoggedinUser() {
    return loggedinUser
}


let gMails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930700,
        to: 'momo@momo.com'
    },
    {
        id: 'e102',
        subject: 'Don\'t Miss you!',
        body: 'but, Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930400,
        to: 'bobo@momo.com'
    }, {
        id: 'e103',
        subject: 'Love you!',
        body: 'No need to catch up',
        isRead: false,
        sentAt: 1551133930600,
        to: 'koko@momo.com'
    }
]
