import { MailEdit } from '../cmps/mail-edit.jsx'

export class MailHeaderContainer extends React.Component {

    state = {
        isEdit: null
    }

    onAddMail = () => {

    }

    render() {

        const { onAddMail } = this

        return <div className="mail-header">
            <button className="mail-compose" onClick={onAddMail}>
                <img className="mail-compose-img"
                    src="../../../assets/img/mail/add.svg"
                    alt="add-img"
                />
                Compose</button>
            <MailEdit />
            <div >SearchBar</div>
        </div>
    }
}