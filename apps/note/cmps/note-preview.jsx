import { noteService } from "../services/note.service.js"
import { NoteColorPalette } from "./note-color-palette.jsx"
import { NoteDetails } from "./note-details.jsx"

export class NotePreview extends React.Component {

    state = {
        note: this.props.note,
        isOnEdit: false,
        paletteIsHidden: true
    }

    componentDidMount() {
        document.addEventListener('click', this.closePaletteColor)
    }

    // opens NoteDetails Modal
    editNote = () => {
        this.setState({ isOnEdit: true })
    }

    openPaletteColor = (ev) => {
        ev.stopPropagation()
        const { paletteIsHidden } = this.state
        this.setState({ paletteIsHidden: !paletteIsHidden })
    }

    changeNoteColor = (ev) => {
        ev.stopPropagation()
        const { className } = ev.target
        this.setState(prevState => ({ note: { ...prevState.note, classBgColor: className } }),
            () => { noteService.updateNote(this.state.note) }
        )

        // update service and then view(state) ???
        // noteService.updateNote(updated.note)
        //     .then(note => this.setState({ note }))
    }

    closePaletteColor = () => {
        this.setState({ paletteIsHidden: true })
    }

    render() {
        const { note, isOnEdit, paletteIsHidden } = this.state
        // console.log('note:', note);

        return <section className={`note-preview ${note.classBgColor}`}>
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
                    <button onClick={this.openPaletteColor}>Pa{/* add pallete icon */}</button>
                    <NoteColorPalette paletteIsHidden={paletteIsHidden} changeNoteColor={this.changeNoteColor} />
                </div>
                <button onClick={() => this.props.removeNote(note.id)}>Re{/* add trash icon */}</button>
            </div>

            {isOnEdit && <NoteDetails note={note} />}

        </section>
    }
}