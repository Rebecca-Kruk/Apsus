import { emailService } from "../services/mail.service.js";
import { EmailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {

    state = {
        logggedinUser: emailService.getLoggedinUser() || {},
        emails: this.props.emails || [],
    }

    render() {
        const { emails, logggedinUser } = this.state
        // console.log('emails from  MailList', emails);
        // console.log('user from  MailList', logggedinUser)

        return <section className="mail-list">
            <ul>
                <li>
                    <EmailPreview email={emails[0]} logggedinUser={logggedinUser} />
                </li>
                <li>Mail 2</li>
                <li>Mail 3</li>
                <li>Mail 4</li>
                <li>Mail 5</li>
                <li>Mail 6</li>
            </ul>
        </section>
    }
}