import { noteService } from "../services/note.service.js"
import { NoteEdit } from "./note-edit.jsx"
import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {

    state = {
        notes: [],
        type: 'note-txt'
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

    addNote = (newNote) => {
        this.setState(prevState => ({ notes: [newNote, ...prevState.notes] }))
    }

    // setNoteType = (type) => {
    //     this.setState({ type })
    // }

    render() {
        // console.log('this.state.notes:', this.state.notes);

        return <section className="note-list-container">
            <div className="note-add">
                <NoteEdit addNote={this.addNote} type={this.state.type}  />
                {/* <div className="options-buttons">
                    <button title="New text note" onClick={() => this.setNoteType('note-txt')}><i className="fa-solid fa-pencil"></i></button>
                    <button id="img-btn" title="New note with image" onClick={() => this.setNoteType('note-img')}>
                        <i className="fa-solid fa-image"></i>
                        <input type="file" onChange={this.setNoteInfo} />
                    </button>
                    <button title="New list" onClick={() => this.setNoteType('note-todos')}><i className="fa-solid fa-list-ul"></i></button>
                </div> */}
            </div>
            <div className="note-list">
                {this.state.notes.map(note => {
                    return <NotePreview key={note.id} note={note} removeNote={this.removeNote} />
                })}
            </div>
        </section>
    }
}