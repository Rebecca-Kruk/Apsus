import { EmailDetails } from "./mail-details.jsx"
import { utilService } from "../../../services/util.service.js"

export class EmailPreview extends React.Component{

    state ={
        logggedinUser: this.props.logggedinUser || {},
        email : this.props.email || {}
    }
    
    render() {
        const {email, logggedinUser} =  this.state
        // console.log('Email from emailPreview', email)
        // console.log('User from emailPreview', logggedinUser)
    return <article className="mail-preview">
        <span>{logggedinUser.fullname}</span><br />
        <span>{email.subject}</span><br />
        <span>{utilService.createdAt(email.sentAt)}</span><br />
        <EmailDetails/>
    </article>
    }
}