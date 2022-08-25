import { noteService } from "../services/note.service.js"
import { NoteColorPalette } from "./note-color-palette.jsx"
import { NoteDetails } from "./note-details.jsx"

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {

    state = {
        note: this.props.note,
        isOnEdit: false,
        paletteIsHidden: true,
        // classBgColor: ''
    }

    inputRef = React.createRef()

    componentDidMount() {
        // console.log('inputRef:', this.inputRef);
    }

    // opens NoteDetails Modal
    editNote = () => {
        this.setState({ isOnEdit: true })
    }

    openPaletteColor = () => {
        const { paletteIsHidden } = this.state
        this.setState({ paletteIsHidden: !paletteIsHidden })
    }

    changeNoteColor = (ev) => {
        ev.preventDefault()
        const { className } = ev.target
        // this.setState({ note: [...this.state.note, className] })
        // this.inputRef.current.style.backgroundColor = bgcolor
    }



    addNoteImg = () => {

    }

    render() {
        const { note, isOnEdit, paletteIsHidden } = this.state
        // console.log('note:', note);
        // console.log('classBgColor:', note.classBgColor);

        return <section className={`note-preview ${note.classBgColor}`} ref={this.inputRef}>
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
                <div className="color-palette-dropdown">
                    <button onClick={this.openPaletteColor}>
                        Pa
                        {/* add pallete icon */}
                    </button>
                    <NoteColorPalette paletteIsHidden={paletteIsHidden} changeNoteColor={this.changeNoteColor} />
                </div>
                <button onClick={this.addNoteImg}>Ad</button>
                <button onClick={() => this.props.removeNote(note.id)}>Re</button>
            </div>

            {isOnEdit && <NoteDetails note={note} />}

        </section>
    }
}