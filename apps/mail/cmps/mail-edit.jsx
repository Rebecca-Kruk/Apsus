
export class MailEdit extends React.Component {

    state = {
        email: {
            to: '',
            subject: '',
            body: '',
        }
    }

    componentDidMount(){
        console.log('from email edit', this.props)
        this.loadMails()
    }

    loadMails = () => {

    }

    handleChange = () =>  {

    }

    render(){
        const { body } = this.state.email
        return <section className="mail-edit">
            <form>
                <label htmlFor="body"></label>
                <input 
                type="text"
                name="body"
                value = {body}
                onChange={this.handleChange}
                />

            </form>

        </section>
    }
}


