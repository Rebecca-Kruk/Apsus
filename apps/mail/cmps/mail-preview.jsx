import { EmailDetails } from "./mail-details.jsx"
import { utilService } from "../../../services/util.service.js"

export class EmailPreview extends React.Component {

    state = {
        logggedinUser: this.props.logggedinUser || {},
        email: this.props.email || {},
        isSelected: false,
    }

    onSelectToggle = () => {
        this.setState({isSelected: !this.state.isSelected})
    }

    render() {
        const { email, logggedinUser, isSelected } = this.state
        const {onSelectToggle} = this
        // console.log('Email from emailPreview', email)
        // console.log('User from emailPreview', logggedinUser)

        return <article onClick={onSelectToggle}className="mail-preview">
            <span>{logggedinUser.fullname}</span><br />
            <span>{email.subject}</span><br />
            <span>{utilService.createdAt(email.sentAt)}</span><br />
            {isSelected && <EmailDetails email={email} logggedinUser={logggedinUser} />}
        </article>
    }
}