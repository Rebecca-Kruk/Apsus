

export class MailOptions extends React.Component {

    render() {
        return <section className="option-list">
            <button>Compose</button>
            <ul>
                <li>Inbox</li>
                <li>Starred</li>
                <li>Sent Mail</li>
                <li>Drafts</li>
            </ul>
        </section>
    }
}