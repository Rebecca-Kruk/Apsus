import { noteService } from "../services/note.service.js"

export class NoteAdd extends React.Component {

    state = {
        type: 'note-txt',
        info: {},
        classBgColor: ''
    }

    // note-txt - info: { txt }
    // note-img - info: { url, title }
    // note-video 
    // note-todos - info: { label, todos[txt] }

    setNoteType = (type) => {
        this.setState({ type })
    }

    setNoteInfo = ({ target }) => {
        const { name, value } = target
        this.setState({ info: { [name]: value } })
    }

    saveNote = () => {
        const { type, info, classBgColor } = this.state
        noteService.addNote(type, info, classBgColor).then(newNote => {
            // console.log('newNote:', newNote);
            this.props.updateNotes(newNote)
        })
    }

    render() {
        const { type } = this.state

        return <section className="note-add">
            <div className="note-add-container">
                {type === 'note-txt' && <input type="text" name="txt" placeholder="Take a note..." onChange={this.setNoteInfo}></input>}
                {type === 'note-img' && <input type="text" placeholder="Attach image..."></input>}
                {type === 'note-todos' && <input type="text" placeholder="Take a todo list..."></input>}

                <div className="options-buttons">
                    <button onClick={this.saveNote}>Save</button>

                    <button onClick={() => this.setNoteType('note-txt')}>text</button>
                    <button onClick={() => this.setNoteType('note-img')}>img</button>
                    <button onClick={() => this.setNoteType('note-todos')}>todos</button>
                </div>
            </div>
        </section>
    }
}