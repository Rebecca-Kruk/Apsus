import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteList } from "../cmps/note-list.jsx"

export class NoteApp extends React.Component {

    render() {
        return <section className="note-app menu-opened ">
            <div className="main-screen full" ></div>
            <NoteHeader />
            {/* <NoteAdd /> */}
            <NoteList />
        </section>
    }
}