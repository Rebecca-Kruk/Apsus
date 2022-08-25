import { MailEdit } from '../cmps/mail-edit.jsx'

export class MailOptions extends React.Component {

    state = {
        isEdit: null
    }

    onAddMail = () => {

    }

    render() {
        const { onAddMail } = this
        return <section className="option-list">
            <button className="btn-mail-compose" onClick={onAddMail}>
                <i className="fa-solid fa-pencil"></i><span>Compose</span></button>
                <span><MailEdit /></span>
            <ul>
                <li>Inbox</li>
                <li>Starred</li>
                <li>Sent Mail</li>
                <li>Drafts</li>
            </ul>
        </section>
    }
}