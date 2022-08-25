import { utilService } from "../../../services/util.service.js"

export function EmailDetails({ email, logggedinUser, onRemoveEmail }) {

    // console.log('email from Email Setails', email)
    // console.log('logggedinUser from Email Setails', logggedinUser)
    return <section className="mail-details">
        <hr />
        <span>from: {logggedinUser.email}</span><br />
        <span>to: {email.to}</span><br />
        <hr />
        <div className="mail-content">
            <span>
                {email.body}
            </span>
            <div>
                <button className="btn-remove" onClick={() => onRemoveEmail(email.id)}><i className="fa-solid fa-trash-can"></i></button>
                <button className="btn-edit"><i className="fa-solid fa-pencil"></i></button>
            </div>
        </div>
    </section>
}