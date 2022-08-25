import { noteService } from "../services/note.service.js"

export class NoteDetails extends React.Component {

    state = {
        note: this.props.note
    }

    render() {
        const { note } = this.state

        return <section className="note-details">
            <button className="pin-note">pin</button>

            {note.type === 'note-txt' && note.info.txt}
            {note.type === 'note-img' &&
                <div>
                    <p>{note.info.title}</p>
                    <img src={note.info.url} />
                </div>
            }
            {note.type === 'note-todos' &&
                <div>
                    {note.info.label}
                    <ul>
                        {note.info.todos.map((todo, idx) => {
                            return <li key={idx} className={todo.doneAt ? 'done' : ''}>{todo.txt}</li>
                        })}
                    </ul>

                </div>
            }


            <div className="edit">
                <button onClick={this.changeNoteColor}>Pa</button>
                <button onClick={this.addNoteImg}>Ad</button>
                <button onClick={() => this.props.removeNote(note.id)}>Re</button>
            </div>

        </section>
    }
}