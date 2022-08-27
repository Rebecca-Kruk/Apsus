import { MailOptions } from "../cmps/mail-options.jsx"
import { emailService } from "../services/mail.service.js"

export class MailFilter extends React.Component {
    state = {
        filterBy: this.props.filterBy || null
    }

    onFilter = (filterBy) => {
        this.props.onSetFilter(filterBy)
    }

    onSetStatus=(updatedStatus) =>{
        const { filterBy } = this.state
        this.setState({
            filterBy:
            {
                ...filterBy,
                status: updatedStatus
            }
        }, () => this.onFilter(this.state.filterBy))
    }

    render() {
        const setStatus = emailService.getStatusList()
        const { onAddEmail, isCompose, onOpenCompose, onCloseCompose } = this.props
        const { onSetStatus } = this

        return <section className="mail-container">
            <MailOptions onAddEmail={onAddEmail}
                setStatus={setStatus}
                onSetStatus={onSetStatus}
                isCompose={isCompose}
                onOpenCompose={onOpenCompose}
                onCloseCompose={onCloseCompose}
            />
        </section>
    }
}