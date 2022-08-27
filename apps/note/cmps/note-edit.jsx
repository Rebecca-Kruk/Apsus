import { noteService } from "../services/note.service.js"
import { TodoList } from "./todo-list.jsx"

export class NoteEdit extends React.Component {

    state = {
        type: 'note-txt',
        info: {},
        classBgColor: '',
        isEditting: false
    }

    componentDidMount() {
        const { note } = this.props

        if (note) {
            this.setState({ isEditting: true })
            const type = note.type
            const info = note.info
            const classBgColor = note.classBgColor
            this.setState({ type, info, classBgColor }, console.log('this.state:', this.state))
        }
    }

    setNoteType = (type) => {
        this.setState({ type })
    }

    setNoteInfo = ({ target }) => {
        const { value } = target
        const { type, info } = this.state
        // const type = this.props.type

        if (type === 'note-txt') {
            this.setState({ info: { txt: value } })
        }

        if (type === 'note-img') {
            if (target.type === 'file') {
                this.setState(prevState => ({
                    info: {
                        title: prevState.info.title || prevState.info.txt || '',
                        url: URL.createObjectURL(target.files[0])
                    }
                }))
            } else {
                const title = info.txt || value
                this.setState(prevState => ({ info: { url: prevState.info.url, title } }))
            }
        }
    }

    setNoteTodoInfo = (info) => {
        this.setState({ info })
    }

    onSaveCar = (ev) => {
        ev.preventDefault()
        carService.save(this.state.car)
            .then(() => {
                this.props.history.push('/car')
            })
    }

    saveNote = () => {
        const { type, info, classBgColor } = this.state
        // const type = this.props.type
        console.log('this.state:', this.state);

        // carService.save(this.state.car)
        //     .then(() => {
        //         this.props.history.push('/car')
        //     })
        // console.log('id, isPinned:', id, isPinned);

        if (this.props.note) {
            const { id, isPinned } = this.props.note
            console.log('info:', info);
            console.log('this.props.note:', this.props.note);
            noteService.updateNote({ id, type, isPinned, info })
                .then(() => this.props.updateNote(id, info))

        } else {

            if (type === 'note-todos') {
                this.setState(prevState => ({
                    info: {
                        label: prevState.info.label,
                        todos: prevState.info.todos.filter(todo => todo.txt !== '')
                    }
                }), () => {
                    noteService.addNote(type, info, classBgColor)
                        .then(newNote => { this.props.addNote(newNote) })
                    this.setState({ info: {} })
                })
                return
            }

            noteService.addNote(type, info, classBgColor).then(newNote => {
                this.props.addNote(newNote)
            })
        }

        this.setState({ info: {} })

        if (this.props.note) {
            this.props.closeEditModal()
        }
    }

    render() {
        const { type, info, classBgColor, isEditting } = this.state
        // const type = this.props.type
        // console.log('render:', this.state);
        // console.log('this.state.info:', this.state.info);

        return <section>
            {(type === 'note-txt' || type === 'note-img') &&
                <textarea value={info.txt || info.title || ''}
                    placeholder="Take a note..." onChange={this.setNoteInfo}>
                </textarea>
            }
            {info.url && <img src={info.url} alt="img" />}
            {type === 'note-todos' && <TodoList setNoteTodoInfo={this.setNoteTodoInfo} note={this.props.note} />}

            <button id="save-btn" onClick={this.saveNote}>Save</button>
            <div className="options-buttons" hidden={isEditting}>
                <button title="New text note" onClick={() => this.setNoteType('note-txt')}><i className="fa-solid fa-pencil"></i></button>
                <button id="img-btn" title="New note with image">
                    <i className="fa-solid fa-image"></i>
                    <input type="file" onClick={() => this.setNoteType('note-img')} onChange={this.setNoteInfo} />
                </button>
                <button title="New list" onClick={() => this.setNoteType('note-todos')}><i className="fa-solid fa-list-ul"></i></button>
            </div>
        </section>
    }
}