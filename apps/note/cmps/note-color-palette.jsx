export class NoteColorPalette extends React.Component {

    render() {
        const { paletteIsHidden, changeNoteColor } = this.props

        return <ul className="color-palette-menu" hidden={paletteIsHidden}>
            <li className="bg-white" onClick={changeNoteColor}></li>
            <li className="bg-red" onClick={changeNoteColor}></li>
            <li className="bg-orange" onClick={changeNoteColor}></li>
            <li className="bg-yellow" onClick={changeNoteColor}></li>
            <li className="bg-green" onClick={changeNoteColor}></li>
            <li className="bg-teal" onClick={changeNoteColor}></li>
            <li className="bg-blue" onClick={changeNoteColor}></li>
            <li className="bg-dark-blue" onClick={changeNoteColor}></li>
            <li className="bg-purple" onClick={changeNoteColor}></li>
            <li className="bg-pink" onClick={changeNoteColor}></li>
            <li className="bg-brown" onClick={changeNoteColor}></li>
            <li className="bg-grey" onClick={changeNoteColor}></li>
        </ul >
    }

}

// not working with component function
// function NoteColorPalette({ paletteIsHidden, changeNoteColor }) {

//     return <ul className="color-palette-menu" hidden={paletteIsHidden}>
//         <li className="bg-white" onClick={changeNoteColor}></li>
//         <li className="bg-red" onClick={changeNoteColor}></li>
//         <li className="bg-orange" onClick={changeNoteColor}></li>
//         <li className="bg-yellow" onClick={changeNoteColor}></li>
//         <li className="bg-green" onClick={changeNoteColor}></li>
//         <li className="bg-teal" onClick={changeNoteColor}></li>
//         <li className="bg-blue" onClick={changeNoteColor}></li>
//         <li className="bg-dark-blue" onClick={changeNoteColor}></li>
//         <li className="bg-purple" onClick={changeNoteColor}></li>
//         <li className="bg-pink" onClick={changeNoteColor}></li>
//         <li className="bg-brown" onClick={changeNoteColor}></li>
//         <li className="bg-grey" onClick={(ev) => changeNoteColor(ev)}></li>
//     </ul >

// }