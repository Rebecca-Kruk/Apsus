export class NoteAdd extends React.Component {

    state = {
        type: 'note-txt',
        info: {},
        classBgColor: ''
    }

    // note-txt - info: { txt }
    // note-img - info: {url, title}
    // note-video 
    // note-todos - info: {label, todos[txt]}

    render() {
        return <section className="note-add">
            <div className="note-add-container">

                <input type="text" placeholder="Take a note..."></input>
            </div>
        </section>
    }
}