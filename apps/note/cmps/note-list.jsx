import { noteService } from "../services/note.service.js"
import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query().then(notes => this.setState({ notes }))
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.setState({ notes: this.state.notes.filter(note => noteId !== note.id) }))
    }

    render() {
        // console.log('this.state.notes:', this.state.notes);

        return <section className="note-list">
            {this.state.notes.map(note => {
                return <NotePreview key={note.id} note={note} removeNote={this.removeNote} />
            })}
        </section>
    }
}