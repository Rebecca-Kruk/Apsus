import { noteService } from "../services/note.service.js"
import { NoteEdit } from "./note-edit.jsx"
import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes: [...notes] })
            // when there is no gNotes change to ->
            // this.setState({ notes })
        }
        )
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.setState({ notes: this.state.notes.filter(note => noteId !== note.id) }))
    }

    updateNotes = (newNote) => {
        this.setState(prevState => ({ notes: [newNote, ...prevState.notes] }))
    }

    // setNoteType = (type) => {
    //     this.setState({ type })
    // }

    render() {
        // console.log('this.state.notes:', this.state.notes);

        return <section className="note-list-container">
            <div className="note-add">
                <NoteEdit updateNotes={this.updateNotes} />
            </div>
            <div className="note-list">
                {this.state.notes.map(note => {
                    return <NotePreview key={note.id} note={note} removeNote={this.removeNote} />
                })}
            </div>
            {/* <div className="options-buttons">
                <button onClick={() => this.setNoteType('note-txt')}>text</button>
                <input type="file" onClick={() => this.setNoteType('note-img')} onChange={this.setNoteInfo} />
                <button onClick={() => this.setNoteType('note-todos')}>todos</button>
            </div> */}
        </section>
    }
}