import { emailService } from "../services/mail.service.js";
import { EmailPreview } from "./mail-preview.jsx"

export class MailList extends React.Component {

    state = {
        logggedinUser: emailService.getLoggedinUser() || {},
    }

    render() {
        return <section className="mail-list">
            {/* <div className="mail-list-header">mail-list-header</div> */}
            <ul>
                {
                    this.props.emails.map(email =>
                        <li key={email.id}>
                            <EmailPreview email={email}
                                logggedinUser={this.state.logggedinUser}
                                filterBy={this.props.filterBy}
                                onOpenCompose={this.props.onOpenCompose}
                                onCloseCompose={this.props.onCloseCompose}
                                isCompose={this.props.isCompose}
                                onAddEmail={this.props.onAddEmail}
                                onRemoveEmail={this.props.onRemoveEmail}
                                onReadEmail={this.props.onReadEmail}
                                onNotReadEmail={this.props.onNotReadEmail}

                            />
                        </li>
                    )
                }
            </ul>
        </section>
    }
}