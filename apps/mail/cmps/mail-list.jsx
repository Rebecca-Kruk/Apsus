import { emailService } from "../services/mail.service.js";
import { EmailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {

    state = {
        logggedinUser: emailService.getLoggedinUser() || {},
        emails: this.props.emails || [],
    }

    render() {
        const { emails, logggedinUser } = this.state
        console.log('emails from  MailList', emails);
        console.log('user from  MailList', logggedinUser)

        return <section className="mail-list">
            <ul>
                {
                    emails.map(email =>
                        <li key={email.id}>
                            <EmailPreview email={email} logggedinUser={logggedinUser} />
                        </li>
                    )
                }
            </ul>
        </section>
    }
}