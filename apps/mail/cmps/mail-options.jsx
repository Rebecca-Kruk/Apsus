import { MailEdit } from '../cmps/mail-edit.jsx'

export class MailOptions extends React.Component {

    state = {
        isCompose: false
    }

    openCompose = () => {
        this.state.isCompose = true
        this.setState({ isCompose: true })
    }


    render() {
        const { isCompose } = this.state
        return <section className="option-list">
            <button className="btn-mail-compose" onClick={this.openCompose}>
                <i className="fa-solid fa-pencil"></i><span>Compose</span>
            </button>
            {
                isCompose &&
                <span><MailEdit onAddEmail={this.props.onAddEmail}
                    isCompose={this.state.isCompose}
                    onCloseCompose={(updatedIsCompose) => {
                        this.setState({ isCompose: updatedIsCompose })
                    }} />
                </span>
            }
            <ul>
                <li>Inbox</li>
                <li>Starred</li>
                <li>Sent Mail</li>
                <li>Drafts</li>
            </ul>
        </section>
    }
}