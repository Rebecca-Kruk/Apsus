import { noteService } from "../services/note.service.js"
import { NoteDetails } from "./note-details.jsx"

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {

    state = {
        note: this.props.note
    }

    editNote = () => {
        // opens NoteDetails
    }
    
    changeNoteColor = () => {
        
    }
    
    addNoteImg = () => {
        
    }

    render() {
        const { note } = this.state

        {/* <NoteDetails /> */ }
        return <section className="note-preview">
            <button className="pin-note">pin</button>

            {note.type === 'note-txt' && note.info.txt}
            {note.type === 'note-img' &&
                <div>
                    {note.info.title}
                    <img src={note.info.url} />
                </div>
            }
            {note.type === 'note-todos' && note.info.label}

            <div className="edit">
                {/* //NoteDetails */}
                {/* <Link to={"/note/" + note.id}>edit</Link> */}
                <button onClick={this.editNote}>Ed</button>
                <button onClick={this.changeNoteColor}>Pa</button>
                <button onClick={this.addNoteImg}>Ad</button>
                <button onClick={() => this.props.removeNote(note.id)}>Re</button>
            </div>

        </section>



        // return <Link to={"/note/" + note}>
        //     <section className="note-preview">
        //         note preview
        //         {note.id}
        //         {/* <NoteDetails /> */}
        //     </section>
        // </Link>
    }
}