import { EmailDetails } from "./mail-details.jsx"
import { utilService } from "../../../services/util.service.js"

export class EmailPreview extends React.Component {

    state = {
        logggedinUser: this.props.logggedinUser || {},
        email: this.props.email || {},
        isSelected: false,
    }

    onSelectToggle = () => {
        this.setState({ isSelected: !this.state.isSelected })
    }

    render() {
        const { email, logggedinUser, isSelected } = this.state
        const { onSelectToggle } = this

        return <article className="mail-preview">
            <div className="mail-preview-container" onClick={onSelectToggle}>
                <span className="fullname">{logggedinUser.fullname}</span><br />
                <span className="subject">{email.subject}</span><br />
                <span className="sentAt">{utilService.createdAt(email.sentAt)}</span><br />
                <button className="btn-remove" onClick={() => this.props.onRemoveEmail(email.id)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
            {isSelected && <EmailDetails email={email} logggedinUser={logggedinUser} onRemoveEmail={this.props.onRemoveEmail} />}
        </article>
    }
}