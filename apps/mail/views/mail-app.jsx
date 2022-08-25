import { MailList } from "../cmps/mail-list.jsx";
import { MailOptions } from "../cmps/mail-options.jsx";
import { MailHeaderContainer } from "../cmps/mail-header-container.jsx";

// import { utilService } from '../../../services/util.service.js'
import { emailService } from '../services/mail.service.js'

export class MailApp extends React.Component {

    state = {
        emails: [],
        filterBy: null,
        isFilter: false,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then((emails) => {
            this.setState({ emails })
        })
    }

    onAddEmail = (newEmail) => {
        this.setState({ newEmail }, () => {
            this.loadEmails()
        })
    }

    onRemoveEmail = (emailId) => {
        emailService.remove(emailId).then(() => {
            const emails = this.state.emails.filter(email => email.id !== emailId)
            this.setState({ emails })
        })
    }

    render() {
        const { emails } = this.state
        const { onRemoveEmail, onAddEmail } = this

        return <div className="mail-app-container">
            <MailHeaderContainer />
            <main className="mail-container">
                <MailOptions onAddEmail={onAddEmail} />
                <MailList emails={emails} onRemoveEmail={onRemoveEmail} />
            </main>
        </div>
    }

}
