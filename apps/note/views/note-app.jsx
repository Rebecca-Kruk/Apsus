import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"

export class NoteApp extends React.Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        noteService.query().then(notes => this.setState({ notes }))
    }

    render() {
        console.log('notes:', this.state.notes);
        return <section className="note-app">
            Note App
            <NoteHeader />
            <NoteList notes={this.state.notes} />
        </section>
    }
}