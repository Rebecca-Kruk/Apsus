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
               
                <span><MailEdit onAddEmail={this.props.onAddEmail}
                    isCompose={this.state.isCompose}
                    onCloseCompose={(updatedIsCompose) => {
                        this.setState({ isCompose: updatedIsCompose })
                    }} />
                </span>
            }
            <ul>
                <li><i className="fa-solid fa-inbox"></i><span>Inbox</span></li>
                <li><i className="fa-solid fa-star"></i><span>Starred</span></li>
                <li><i className="fa-solid fa-paper-plane"></i><span>Sent Mail</span></li>
                <li><i className="fa-solid fa-file"></i><span>Draft</span></li>
                <li><i className="fa-solid fa-trash-can"></i><span>Bin</span></li>
            </ul>
        </section>
    }
}