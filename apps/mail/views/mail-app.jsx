import { MailList } from "../cmps/mail-list.jsx";
import { MailOptions } from "../cmps/mail-options.jsx";
import { MailHeaderContainer } from "../cmps/mail-header-container.jsx";

import { utilService } from '../../../services/util.service.js'
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
        emailService.query(this.state.filterBy).then((emails) =>{
            console.log('Emails Loaded...')
             this.setState( {emails})})
    }

    onRemoveEmail =(emailId) => {
        emailService.remove(emailId).then(()=>{
            console.log('Removed')
            const emails = this.state.emails.filter(email => email.id !== emailId)
            this.setState({emails})
        })
    }

    render() {
        const {emails} = this.state
        console.log('emails from  MailApp', emails);

        return <div className="mail-app-container">
            <header className="mail-header">
                <MailHeaderContainer />
            </header>
            <main className="mail-container">
                <MailOptions />
                <MailList emails={emails} onRemoveEmail={this.onRemoveEmail}/>
            </main>
        </div>
    }

}
