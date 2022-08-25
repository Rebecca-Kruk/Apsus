import { emailService } from "../services/mail.service.js";
import { EmailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {

    state = {
        logggedinUser: emailService.getLoggedinUser() || {},
    }

    render() {
        const {  logggedinUser } = this.state
        

        return <section className="mail-list">
            <div className="mail-list-header">mail-list-header</div>
            <ul>
                {
                    this.props.emails.map(email =>
                        <li key={email.id}>
                            <EmailPreview email={email} 
                            logggedinUser={logggedinUser} 
                            onRemoveEmail={this.props.onRemoveEmail}/>
                        </li>
                    )
                }
            </ul>
        </section>
    }
}