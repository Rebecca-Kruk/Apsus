import { noteService } from "../services/note.service.js"
import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteList } from "../cmps/note-list.jsx"

export class NoteApp extends React.Component {

    // state = {
    //     notes: [],
    //     filterBy: null
    // }

    // componentDidMount() {
    //     this.loadNotes()
    // }

    // loadNotes = () => {
    //     noteService.query().then(notes =>
    //         this.setState({ notes: [...notes] })
    //     )
    //     // when there is no gNotes change to ->
    //     // this.setState({ notes })
    // }

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadNotes)
    // }

    render() {

        return <section className="note-app menu-opened ">
            <div className="main-screen full" ></div>
            <NoteHeader />
            <NoteList />
            {/* <NoteHeader onSetFilter={this.onSetFilter} />
            <NoteList note={this.state.notes} /> */}
        </section>
    }

}