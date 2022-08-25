import { noteService } from "../services/note.service.js"
import { NoteAdd } from "./note-add.jsx"
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
        }
        )
    }

    removeNote = (noteId) => {
        noteService.removeNote(noteId)
            .then(this.setState({ notes: this.state.notes.filter(note => noteId !== note.id) }))
    }

    updateNotes = (newNote) => {
        // console.log('this.state.notes:', this.state.notes);
        this.setState(prevState => ({ notes: [newNote, ...prevState.notes] }))
    }

    render() {
        // console.log('this.state.notes:', this.state.notes);

        return <section className="note-list">
            <NoteAdd updateNotes={this.updateNotes} />
            {this.state.notes.map(note => {
                return <NotePreview key={note.id} note={note} removeNote={this.removeNote} />
            })}
        </section>
    }
}