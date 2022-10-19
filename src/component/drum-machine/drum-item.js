import './drum-item.scss';
import {Component, createRef} from "react";

class DrumItem extends Component {
    constructor(props) {
        super(props);
        this.audioRef = createRef();
        this.drumItemRef = createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    onDrumItemClick() {
        const text = this.props.drumItem.id;
        const audio = this.audioRef.current;

        this.props.updateDisplayText(text);

        audio.currentTime = 0;
        audio.play();
    }

    handleKeyUp(e) {
        if (e.keyCode === this.props.drumItem.keyCode) {
            this.drumItemRef.current.classList.add('is-active');
            this.onDrumItemClick();
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === this.props.drumItem.keyCode) {
            setTimeout(() => {
                this.drumItemRef.current.classList.remove('is-active');
            }, 250);
        }
    }

    updateVolume() {
        this.audioRef.current.volume = this.props.volume / 100;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateVolume();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
    }


    render() {
        const {drumItem} = this.props;

        return (
            <div className={'drum-item drum-pad'} ref={this.drumItemRef} tabIndex='0' id={drumItem.id} onClick={() => this.onDrumItemClick()}>
                <audio className={'clip'} id={drumItem.keyTrigger} src={drumItem.url} ref={this.audioRef}></audio>
                {drumItem.keyTrigger}
            </div>
        )
    }
}

export default DrumItem;
