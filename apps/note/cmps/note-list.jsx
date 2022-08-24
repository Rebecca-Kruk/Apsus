import { NotePreview } from "./note-preview.jsx"

export class NoteList extends React.Component {

    state = {
        notes: this.props
    }

    render() {

        return <section className="note-list">
            {this.props.notes.map(note => {
                return <NotePreview key={note.id} note={note} />
            })}
        </section>
    }
}