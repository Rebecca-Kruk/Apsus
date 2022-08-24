import { NoteDetails } from "./note-details.jsx"

const { Link } = ReactRouterDOM

export class NotePreview extends React.Component {

    state = {
        isHover: false
    }

    render() {
        const { note } = this.props

        return <section className="note-preview">
            {/* {note.id} */}
            {note.type === 'note-txt' && note.info.txt}
            {note.type === 'note-img' && <h2>{note.info.title}</h2>}<img src={note.info.url} />
            {note.type === 'note-todos' && note.info.label}

            {/* <NoteDetails /> */}
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