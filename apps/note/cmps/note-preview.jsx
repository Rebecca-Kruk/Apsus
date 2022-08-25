import { noteService } from "../services/note.service.js"
import { NoteDetails } from "./note-details.jsx"

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {

    state = {
        note: this.props.note,
        isOnEdit: false,
        paletteIsHidden: true
    }

    // opens NoteDetails Modal
    editNote = () => {
        this.setState({ isOnEdit: true })
    }

    changeNoteColor = () => {
        this.setState({ paletteIsHidden: false })
    }

    addNoteImg = () => {

    }

    render() {
        const { note, isOnEdit, paletteIsHidden } = this.state

        return <section className="note-preview">
            <button className="pin-note">pin</button>

            {note.type === 'note-txt' && note.info.txt}
            {note.type === 'note-img' &&
                <div>
                    {note.info.title}
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
                <button onClick={this.editNote}>Ed</button>
                <div className="dropdown-color-palette">
                    <button onClick={this.changeNoteColor}>Pa</button>
                    <div className="color-palette" hidden={paletteIsHidden}>
                        <div className="bg-white">w</div>
                        <div className="bg-red"></div>
                        <div className="bg-orange"></div>
                        <div className="bg-yellow"></div>
                        <div className="bg-green"></div>
                        <div className="bg-teal">t</div>
                        <div className="bg-blue"></div>
                        <div className="bg-dark-blue"></div>
                        <div className="bg-purple"></div>
                        <div className="bg-pink">p</div>
                        <div className="bg-brown"></div>
                        <div className="bg-grey">g</div>
                    </div>
                </div>
                <button onClick={this.addNoteImg}>Ad</button>
                <button onClick={() => this.props.removeNote(note.id)}>Re</button>
            </div>

            {isOnEdit && <NoteDetails note={note} />}

        </section>
    }
}