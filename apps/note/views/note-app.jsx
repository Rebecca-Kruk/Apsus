import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteList } from "../cmps/note-list.jsx"

export function NoteApp() {

    return <section className="note-app menu-opened ">
        <div className="main-screen full" ></div>
        <NoteHeader />
        <NoteList />
    </section>

}