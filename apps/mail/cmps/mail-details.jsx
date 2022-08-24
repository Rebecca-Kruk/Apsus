import { utilService } from "../../../services/util.service.js"

export function EmailDetails({ email, logggedinUser }) {

    // console.log('email from Email Setails', email)
    // console.log('logggedinUser from Email Setails', logggedinUser)
    return <section className="mail-details">
        <span>{email.subject}</span><br />
        <hr />
        <span>{logggedinUser.fullname}</span><br />
        <span>from:{logggedinUser.email}</span><br />
        <span>to:{email.to}</span><br />
        <hr />
        <span>{email.body}</span>
        <button>Remove</button>
        <button>Edit</button>
    </section>
}