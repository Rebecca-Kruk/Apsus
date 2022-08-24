import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {

    state = {
        notes: this.props
    }

    render() {
        return <section className="note-list">
            note list
            <ul>
                {this.props.notes.map(note => {
                    console.log('note:', note);
                    return <li key={note.id}><NotePreview note={note} /></li>
                })}
            </ul>

        </section>
    }
}