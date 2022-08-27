import { EmailDetails } from "./mail-details.jsx"
import { utilService } from "../../../services/util.service.js"
import { emailService } from "../services/mail.service.js"
import { MailEdit } from "./mail-edit.jsx"

export class EmailPreview extends React.Component {

    state = {
        email: this.props.email || {},
        isSelected: false,
    }

    onSelect = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        this.setState({ isSelected: !this.state.isSelected })
        const { status } = this.props.filterBy
        if (status === 'Draft') {
            this.setState({ isSelected: true })
            this.props.onOpenCompose()
        }
    }

    onRemove = (ev, emailId) => {
        ev.stopPropagation()
        const { email } = this.state
        email.isRemoved = true
        this.setState({ email: { ...email, isRemoved: true } })
        this.props.onRemoveEmail(emailId)
        this.props.onCloseCompose(false)
    }

    render() {
        const { onSelect, onRemove } = this
        const { isSelected } = this.state
        const { email, filterBy } = this.props
        const { status } = filterBy

        return <article className="mail-preview">
            <div className="mail-preview-container" onClick={(ev) => onSelect(ev)}>
                <span className="fullname">
                    {emailService.getUserName(filterBy, email)}
                </span>
                <span className="subject">{email.subject}</span>
                <span className="sentAt">{utilService.createdAt(email.sentAt)}</span>
                <button className="btn-remove" onClick={(ev) => onRemove(ev, email.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
            {isSelected && status !== 'Draft' && <EmailDetails
                email={email}
            />}
            {isSelected && status === 'Draft' && <MailEdit
                status={status}
                email={email}
                isSelected={isSelected}
                isCompose={this.props.isCompose}
                onCloseCompose={this.props.onCloseCompose}
                onAddEmail={this.props.onAddEmail}
            />}
        </article>
    }
}