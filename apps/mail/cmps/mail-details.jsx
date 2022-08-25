
export function EmailDetails({ email, logggedinUser }) {

    return <section className="mail-details">
        <div className="mail-details-header">
            <span>from: {logggedinUser.email}</span>
            <span>to: {email.to}</span>
        </div>
        <div className="mail-details-body">
            <span>
                {email.body}
            </span>
        </div>
    </section>
}