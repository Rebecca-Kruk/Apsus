import { NoteHeader } from "../cmps/note-header.jsx"
import { NoteApp } from "./note-app.jsx"
import { NoteDetails } from "../cmps/note-details.jsx"

const { Router, Route, Switch } = ReactRouterDOM

export function NoteIndex() {
    return <section className="note-index">
        <NoteHeader />
        <main>
            <NoteApp />
        </main>
    </section>
    // return <Router>
    //     <section className="note-index">
    //         <NoteHeader />
    //         <main>
    //             <Switch>
    //                 {/* <Route path="/note/details" component={NoteDetails} /> */}
    //                 <Route path="/note/app" component={NoteApp} />
    //             </Switch>
    //             {/* <NoteApp />
    //             <NoteDetails /> */}
    //         </main>
    //     </section>
    // </Router>
}
