import { utilService } from '../../../services/util.service.js'
import { emailService } from '../services/mail.service.js'
import { MailList } from "../cmps/mail-list.jsx";
import { MailOptions } from "../cmps/mail-options.jsx";
import { MailHeaderContainer } from "../cmps/mail-header-container.jsx";

export class MailApp extends React.Component {

    state = {
        emails: emailService.getMail(),
        filterBy: null,
        isFilter: false
    }

    componentsDidMount() {
        this.loadMails()
    }

    loadMails = () => {

    }

    render() {
        const {emails} = this.state
        // console.log('emails from  MailApp', emails);

        return <div className="mail-app-container">
            <header className="mail-header">
                <MailHeaderContainer />
            </header>
            <main className="mail-container">
                <MailOptions />
                <MailList emails={emails}/>
            </main>
        </div>
    }

}
