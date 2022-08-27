import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
    getMail,
    getCriteria,
    query,
    getLoggedinUser,
    removefromEmail,
    getById,
    save,
    getStatusList,
    getUserName,
    removetoBin,
    removefromDraft
}

const KEY = 'emailsDB'

function query(filterBy) {
    let emails = storageService.loadFromStorage(KEY) || gMails
    if (filterBy) {
        let { status } = filterBy
        emails = emails.filter(email => (
            getByStatus(status, email)
        ))
    }
    return Promise.resolve(emails)
}

function getByStatus(status, email) {

    switch (status) {
        case 'Inbox':
            return email.to.includes(loggedinUser.email) && !email.isRemoved
        case 'Sent':
            return !email.to.includes(loggedinUser.email) && !email.isDraft && !email.isRemoved
        case 'Draft':
            return email.isDraft && !email.isRemoved
        case 'Bin':
            return email.isRemoved
    }
}

function getUserName(filterBy, email) {
    const { status } = filterBy
    switch (status) {
        case 'Inbox':
            return email.from.substring(0, email.from.indexOf('@'))
        case 'Sent':
            return `To: ${email.to.substring(0, email.to.indexOf('@')) || email.to}`
        case 'Draft':
            return 'Draft'
        case 'Bin':
            return email.from.substring(0, email.from.indexOf('@'))
    }
}


function save(email) {
    if(email.id) return _update(email)
    else return _add(email)
}


function _update(emailToUpdate) {
    console.log('Updated mail')
    let emails = storageService.loadFromStorage(KEY)
    emails = emails.map(email => email.id === emailToUpdate.id ? emailToUpdate : email)
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve(emailToUpdate)
}


function _add(newEmail) {
    console.log('Added new mail')
    let emails = storageService.loadFromStorage(KEY) || gMails
    let email = _createEmail(newEmail)
    emails = [email, ...emails]
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve(email)
    
}

function removetoBin(emailId) {
    console.log('Removed to Bin')
    let emails = storageService.loadFromStorage(KEY) || gMails
    let email = emails.find(email => email.id === emailId)
    email.isRemoved = true
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve()
}

function removefromDraft(emailId) {
    console.log('Removed from Draft')
    let emails = storageService.loadFromStorage(KEY) || gMails
    console.log('emails', emails)
    console.log('emailId', emailId)
    let email = emails.find(email => email.id === emailId)
    console.log('email', email)
    email.isDraft = false
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve()
}

function removefromEmail(emailId){
    console.log('Removed forever')
    let emails = storageService.loadFromStorage(KEY) || gMails
    let emailIdx = emails.findIndex(email => email.id === emailId)
    emails.splice(emailIdx, 1)
    storageService.saveToStorage(KEY, emails)
    return Promise.resolve()
}


function getById(emailId) {
    if (!emailId) return Promise.resolve(null)
    const emails = storageService.loadFromStorage(KEY) || gMails
    const email = emails.find(email => emailId === email.id)
    return Promise.resolve(email)
}

function _createEmail({ subject, body, to, isDraft }) {
    return {
        id: utilService.makeId(),
        from: loggedinUser.email,
        subject,
        body,
        sentAt: Date.now(),
        to,
        isRead: false,
        isRemoved: false,
        isDraft,
    }
}

function getCriteria() {
    return criteria
}

const loggedinUser = {
    email: 'tanya@appsus.com',
    fullname: 'Tanya'
}

const criteria = {
    status: 'Inbox',
    // txt: '',
    isRead: true, // (optional property, if missing: show all)
    // isStared: true, // (optional property, if missing: show all)
    // lables: [] // has any of the labels
}

const statusOpt = ['Inbox', 'Sent', 'Draft', 'Bin']

function getStatusList() {
    return statusOpt
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
        id: "1n8vjV",
        from: 'tanya@appsus.com',
        subject: "Scent vendors",
        body: "Our office managers have decided to experiment with new odors for the office. Tomorrow, a vendor will bring samples of new scents and perfumes that we’re considering. Please stop by my desk to test out and vote on your favorites.",
        sentAt: 1661449906165,
        to: "Extra@momo.com",
        isRead: true,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "hSScj0",
        from: "Extra@momo.com",
        subject: "Camera crews starting tomorrow",
        body: "I’m thrilled to announce that our office was chosen to be part of a reality show! Starting tomorrow, you’ll notice camera crews setting up and wandering around the office. The name/premise of the reality show is secret, but you don’t need to do anything special. Just behave normally and continue business as usual!",
        sentAt: 1661449880504,
        to: "tanya@appsus.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "4bY8J7",
        from: 'tanya@appsus.com',
        subject: "CTO request",
        body: "Our CTO has decided to start learning Mandarin so that he can better communicate with the engineering team. If you speak Mandarin, he’s asked that you talk to him exclusively in Chinese. He may act confused or ask you to repeat in English, but he has told us ahead of time to not go easy on him; he wants a truly immersive experience.",
        sentAt: 1661449866262,
        to: "Nǐ-hǎo@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "9ZjaJL",
        from: "Nǐ-hǎo@momo.com",
        subject: "Please make alternative parking arrangements",
        body: " According to a new County code, our parking lot has been restricted as it is the breeding ground for a rare type of bird. Employees will no longer be able to park at our office building. Please plan for alternative means of transportation or a different parking lot. I’m sorry for the inconvenienc",
        sentAt: 1661449846338,
        to: "tanya@appsus.com",
        isRead: false,
        isRemoved: true,
        isDraft: false,
    },
    {
        id: "PyAQm2",
        from: 'tanya@appsus.com',
        subject: "Plumbing outage tomorrow",
        body: "Plumbing in our building will be turned off from noon to 5. If you need a bathroom during that time, please use the toilet at the Subway down the street (I’ve already called them to make sure this is alright). Thanks and sorry for the inconvenience",
        sentAt: 1661449828247,
        to: "Please-hold@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "ljJVux",
        from: "Please-hold@momo.com",
        subject: "Video of CEO twerking at Christmas party",
        body: "LMFAO I just found this in my saved Snaps",
        sentAt: 1661449811418,
        to: "tanya@appsus.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "MDTpTW",
        from: 'tanya@appsus.com',
        subject: "Space reorganization",
        body: "We’ve decided to reorganize our cubicles to achieve better organizational synergy. According to the recent findings of our McKinsey consultant, reshaping our work area into a pentagonal hive will improve communication and collaboration across teams. We ask that you clear off your desk tomorrow morning to make it easier to move.",
        sentAt: 1661449788085,
        to: "Buzzness@momo.com",
        isRead: false,
        isRemoved: true,
        isDraft: false,

    },
    {
        id: "PlVIfw",
        from: 'tanya@appsus.com',
        subject: "Hallway to be nap area",
        body: "To attract top tech talent and stay competitive in recruiting, company leadership has decided to convert the hallway to a nap area as a perk for employees. You’re welcome to enjoy 20 min-1 hour power naps in the nap area any time of day (pillows provided). Respect your peers by remaining silent in the hallway — no phone calls, conversations, or meetings, please.",
        sentAt: 1661449773145,
        to: "Quiet-Game@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "y4wO8a",
        from: 'tanya@appsus.com',
        subject: "Warning: Yodeling convention",
        body: "FYI, our office manager informed me this morning that there will be a yodeling convention happening tomorrow on the three floors below us. Please bring earplugs or headphones if the noise will bother you.",
        sentAt: 1661449742612,
        to: "Noise@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "miKCfj",
        from: 'tanya@appsus.com',
        subject: "Mandatory unconscious bias training",
        body: "A recent analysis showed that 60% of our employees have birthdays in October. This fraction is shockingly high, and a follow-up committee is investigating what’s going on. In the meantime, we’re asking everyone to complete mandatory unconscious bias training to ensure that candidates born in other months of the year are treated fairly. Will be sending out the link shortly; please review by the end of the week!",
        sentAt: 1661449725557,
        to: "Oktoberfest@momo.com",
        isRead: false,
        isRemoved: true,
        isDraft: false,

    },
    {
        id: "6HjBty",
        from: 'tanya@appsus.com',
        subject: "Accepting transfer apps for new company office",
        body: "It’s important to our COO to support developing economies and facilitate open borders, so we have decided to open an office in Bali! Construction of the office will begin next week. The new South Pacific facilities will include beachfront conference rooms, high-end video conferencing technology, an on-staff masseuse, and local residences for employees. Please notify me if you’d like to be added to the transfer list.",
        sentAt: 1661449703271,
        to: "Islander@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "3oO87f",
        from: "Islander@momo.com",
        subject: "Company swag for summer!",
        body: "In celebration of spring, we’re giving out company-branded swimsuits! Come to my desk tomorrow to pick up logo-ed trunks and bikinis.",
        sentAt: 1661449687868,
        to: 'tanya@appsus.com',
        isRead: false,
        isRemoved: true,
        isDraft: false,

    },
    {
        id: "9WteZx",
        from: 'tanya@appsus.com',
        subject: "New board member",
        body: "Starting tomorrow, we’ve have a new board member and advisor who will be touring the office. Mr. Rex Tillerson is an accomplished businessman and public servant who has recently decided to invest in our upcoming round. As always, please be courteous and helpful when he’s walking around!",
        sentAt: 1661449672062,
        to: "Trump-card@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "SJawO4",
        from: 'tanya@appsus.com',
        subject: "Improve mental health by switching to tea",
        body: " In light of research about the damaging effects of caffeine on mental health, we’ve decided to switch our coffee to herbal tea. Starting tomorrow, our office manager will brew herbal and black teas, available for free in the micro-kitchen. I encourage you to choose the decaffeinated option :) Coffee will no longer be offered.",
        sentAt: 1661449656740,
        to: "Say-no-to-drugs@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "vgwCMR",
        from: 'tanya@appsus.com',
        subject: "IT swap",
        body: "Due to recent security revelations, our office switching to Chromebooks. Tomorrow, you’ll find that your desktop computers have been replaced with the Samsung Chromebook Plus. If you have a company laptop, please exchange it tomorrow morning before getting to work. Thanks to our IT and operations team for organizing the swap.",
        sentAt: 1661449643464,
        to: "Hardware@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "EuXIWO",
        from: 'tanya@appsus.com',
        subject: "Pro-environmental change to our office supplies",
        body: " Hi everyone! Starting this week, our supply closet will no longer stock staples, paper clips, or tape, for environmental reasons. For fastening paper, we will provide organic glue. Thanks for helping us reduce our office footprint!",
        sentAt: 1661449619041,
        to: "Save-the-planet@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "r84fjt",
        from: "Color-blind@momo.com",
        subject: "Support my nephew!",
        body: "Hey friends — My nephew, Adrian, is running the “Fun Run” 5K for charity at his middle school this weekend. He chose to raise money for the Americans Against Constipation Fund (AACF) and is looking for sponsorships. Please consider donating $10-$40 for this important cause! Thanks for contributing.",
        sentAt: 1661449602221,
        to: 'tanya@appsus.com',
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "DXMTLC",
        from: 'tanya@appsus.com',
        subject: " Help me keep my eyes well!",
        body: "After several years of getting increasingly bad eyes and stronger prescriptions, I’ve finally gotten a diagnosis. My optometrist informed me that I have a condition in which the color black is damaging my eyesight, sort of like an allergy. I’ll be wearing shaded glasses for the next couple of weeks while I undergo treatment. Please refrain from using black on any team documents or presentations (bright colors are okay).",
        sentAt: 1661449583479,
        to: "Color-blind@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "9WBnvk",
        from: 'tanya@appsus.com',
        subject: "New office policy",
        body: "This has been a particularly bad flu season, and we’re concerned about how disease affects productivity. After much discussion and review of recent research, leadership has decided to issue an office policy against sneezing. If you need to sneeze, please go to the bathroom to avoid spreading germs and wash your hands after the sneeze. Do not sneeze at your desk! This new policy starts tomorrow.",
        sentAt: 1661449566143,
        to: "Gesundheit@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "lhlVC4",
        from: "Gesundheit@momo.com",
        subject: "Company-wide Christmas apparel tomorrow",
        body: "I just got notice from our CMO that we’ll be filming for the company Holiday greeting video tomorrow. All employees are expected to appear in the video, so please wear red and green and any other holiday apparel you own (Santa suits, Christmas sweaters, reindeer noses, and onesies encouraged).\n\nGes",
        sentAt: 1661449546411,
        to: 'tanya@appsus.com',
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "O9xiK5",
        from: 'tanya@appsus.com',
        subject: "No leather in the office, starting tomorrow",
        body: "HR just notified me that we have a new employee who starts tomorrow that is allergic to leather. To protect his health and productivity, all leather will be prohibited from the office. This includes bags, shoes, pants, belts, and any other leather accessories. Please leave your leather at home! Thanks for your support.\n\n",
        sentAt: 1661449527354,
        to: "No-more-belt@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "e101",
        from: "No-more-belt@momo.com",
        subject: "Miss you!",
        body: "Would love to catch up sometimes",
        isRead: false,
        sentAt: 1551133930700,
        to: 'tanya@appsus.com',
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "e102",
        from: 'tanya@appsus.com',
        subject: "Don't Miss you!",
        body: "but, Would love to catch up sometimes",
        isRead: false,
        sentAt: 1551133930400,
        to: "bobo@momo.com",
        isRead: false,
        isRemoved: false,
        isDraft: false,

    },
    {
        id: "e103",
        from: "bobo@momo.com",
        subject: "Love you!",
        body: "No need to catch up",
        isRead: false,
        sentAt: 1551133930600,
        to: 'tanya@appsus.com',
        isRead: false,
        isRemoved: false,
        isDraft: false,
    }
]