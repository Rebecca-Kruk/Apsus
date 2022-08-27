import { MailEdit } from '../cmps/mail-edit.jsx'
import { MailStatus } from '../cmps/mail-status.jsx'
import { emailService } from '../services/mail.service.js'

export class MailOptions extends React.Component {

    onStatus = (status) => {
        this.props.onSetStatus(status)
    }

    render() {
        const { onStatus } = this
        const { setStatus, onOpenCompose, isCompose, onCloseCompose } = this.props

        return <section className="option-list">
            <button className="btn-mail-compose" onClick={onOpenCompose}>
                <i className="fa-solid fa-pencil"></i><span>Compose</span>
            </button>
            {
                <span><MailEdit onAddEmail={this.props.onAddEmail}
                    isCompose={isCompose}
                    onCloseCompose={onCloseCompose}/>
                </span>
            }
            <ul>
                {setStatus.map(status => {
                    return <li className="selected"
                        onClick={() => onStatus(status)} key={status}>
                        <MailStatus status={status} />
                        <span>{status}</span>
                        <span>{emailService.gerReadEmails()}</span>
                    </li>
                })}
            </ul>
        </section>
    }
}