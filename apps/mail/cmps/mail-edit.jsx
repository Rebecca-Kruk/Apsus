
export class MailEdit extends React.Component {

    state = {
        email: {
            to: '',
            subject: '',
            body: '',
        }
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {

    }

    handleChange = () => {

    }

    render() {
        const { to, subject, body } = this.state.email
        return <section className="mail-edit">
            <div className="mail-edit-header">
                <span>New Message</span>
                <button><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="mail-edit-body">
                <form >
                    <div className="mail-edit-input-container">
                        <label htmlFor="subject">To </label>
                        <input type="text" name="subject"
                            value={subject}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mail-edit-input-container">
                        <label htmlFor="to">Subject</label>
                        <input type="text" name="to"
                            value={to}
                            onChange={this.handleChange}
                        />
                    </div >
                    <label htmlFor="body"></label>
                    <textarea
                        type='text'
                        name="body"
                        value={body}
                        onChange={this.handleChange}
                    ></textarea>
                </form>

                <button>Send</button>
            </div>
        </section>
    }
}


