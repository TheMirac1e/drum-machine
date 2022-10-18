import './drum-item.scss';
import {Component, createRef} from "react";

class DrumItem extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
    }

    onDrumItemClick() {
        const audio = this.audioRef.current;
        audio.play();
    }

    render() {
        const {letter, audioSrc} = this.props;

        return (
            <div className={'drum-item'} tabIndex='0' onClick={() => this.onDrumItemClick()}>
                {letter}
                <audio src={audioSrc} ref={this.audioRef}></audio>
            </div>
        )
    }
}

export default DrumItem;
