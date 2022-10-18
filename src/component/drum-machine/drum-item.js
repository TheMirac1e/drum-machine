import './drum-item.scss';
import {Component, createRef} from "react";

class DrumItem extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
    }

    onDrumItemClick() {
        const text = this.props.drumItem.id;
        const audio = this.audioRef.current;

        this.props.updateDisplayText(text);

        audio.currentTime = 0;
        audio.play();
    }

    updateVolume() {
        this.audioRef.current.volume = this.props.volume / 100;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateVolume();
    }

    render() {
        const {drumItem} = this.props;

        return (
            <div className={'drum-item drum-pad'} tabIndex='0' onClick={() => this.onDrumItemClick()}>
                <audio className={'clip'} id={drumItem.keyTrigger} src={drumItem.url} ref={this.audioRef}></audio>
                {drumItem.keyTrigger}
            </div>
        )
    }
}

export default DrumItem;
