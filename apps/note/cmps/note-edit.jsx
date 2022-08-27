import { noteService } from "../services/note.service.js"
import { TodoList } from "./todo-list.jsx"

export class NoteEdit extends React.Component {

    state = {
        type: 'note-txt',
        info: {},
        classBgColor: ''
    }

    componentDidMount() {
        if (!this.props.note) return
        const type = this.props.note.type
        const info = this.props.note.info
        const classBgColor = this.props.note.classBgColor
        this.setState({ type, info, classBgColor }, console.log('this.state:', this.state))
    }

    setNoteType = (type) => {
        this.setState({ type })
    }

    setNoteInfo = ({ target }) => {
        const { value } = target
        const { type, info } = this.state

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

    saveNote = () => {
        const { type, info, classBgColor } = this.state

        if (type === 'note-todos') {
            this.setState(prevState => ({
                info: {
                    label: prevState.info.label,
                    todos: prevState.info.todos.filter(todo => todo.txt !== '')
                }
            }), () => {
                noteService.addNote(type, info, classBgColor)
                    .then(newNote => { this.props.updateNotes(newNote) })
                this.setState({ info: {} })
            })
            return
        }

        noteService.addNote(type, info, classBgColor).then(newNote => {
            this.props.updateNotes(newNote)
        })

        this.setState({ info: {} })
    }

    render() {
        const { type, info, classBgColor } = this.state
        // console.log('render:', this.state);
        // console.log('this.state.info:', this.state.info);

        return <section>
            {(type === 'note-txt' || type === 'note-img') &&
                <textarea value={info.txt || info.title || ''}
                    placeholder="Take a note..." onChange={this.setNoteInfo}>
                </textarea>
            }
            {info.url && <img src={info.url} alt="img" />}
            {type === 'note-todos' && <TodoList setNoteTodoInfo={this.setNoteTodoInfo} />}

            <button id="save-btn" onClick={this.saveNote}>Save</button>
            <div className="options-buttons">
                <button onClick={() => this.setNoteType('note-txt')}><i class="fa-solid fa-pencil"></i></button>
                <button id="img-btn">
                    <i class="fa-solid fa-image"></i>
                    <input type="file" onClick={() => this.setNoteType('note-img')} onChange={this.setNoteInfo} />
                </button>
                <button onClick={() => this.setNoteType('note-todos')}><i class="fa-solid fa-list-ul"></i></button>
            </div>
        </section>
    }
}