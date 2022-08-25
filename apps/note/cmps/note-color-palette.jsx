export class NoteColorPalette extends React.Component {

    render() {
        return <ul className="color-palette-menu" hidden={this.props.paletteIsHidden}>
            <li className="bg-white" onClick={this.props.changeNoteColor}></li>
            <li className="bg-red" onClick={this.props.changeNoteColor}></li>
            <li className="bg-orange" onClick={this.props.changeNoteColor}></li>
            <li className="bg-yellow" onClick={this.props.changeNoteColor}></li>
            <li className="bg-green" onClick={this.props.changeNoteColor}></li>
            <li className="bg-teal" onClick={this.props.changeNoteColor}></li>
            <li className="bg-blue" onClick={this.props.changeNoteColor}></li>
            <li className="bg-dark-blue" onClick={this.props.changeNoteColor}></li>
            <li className="bg-purple" onClick={this.props.changeNoteColor}></li>
            <li className="bg-pink" onClick={this.props.changeNoteColor}></li>
            <li className="bg-brown" onClick={this.props.changeNoteColor}></li>
            <li className="bg-grey" onClick={this.props.changeNoteColor}></li>
        </ul >
    }

}