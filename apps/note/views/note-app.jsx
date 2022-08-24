import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"

export class NoteApp extends React.Component {

    render() {
        return <section className="note-app">
            <NoteHeader />
            <NoteList />

            {/* <Router>
                <Route path="/note/details" component={NoteDetails} />
            </Router> */}
        </section>
    }
}