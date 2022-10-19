import './drum.scss';
import {dataKeys} from "../../assets/data";

import {Component} from "react";
import DrumItem from "./drum-item";

class Drum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInput: 'Welcome!',
            powerButton: false,
            volume: 10
        }
        this.updateDisplayText = this.updateDisplayText.bind(this);
        this.updateVolume = this.updateVolume.bind(this);
    }

    updateDisplayText(text) {
        this.setState({
            displayInput: text,
        })
    }

    updateVolume(volume) {
        this.setState({
            volume: volume.target.value,
        })
    }

    render() {
        const {displayInput, volume} = this.state;

        return (
            <div className={'drum'} id={'drum-machine'}>
                <div className={'drum__header'} id="display">
                    <h1 className="drum__header-text">
                        {displayInput}
                    </h1>
                </div>
                <div className="drum__controls">
                    <input type="range" value={volume} onChange={(e) => this.updateVolume(e)}/>
                    <label className={'drum__power'} htmlFor="power">
                        <input id={'power'} type="checkbox" onChange={() => console.log('checked')}/>
                        <span className={'drum__swiper'}></span>
                    </label>
                </div>

                <div className="drum__content">
                    {
                        dataKeys.map((item, i) => {
                            return (
                                <DrumItem
                                    updateDisplayText={this.updateDisplayText}
                                    key={i}
                                    drumItem={item}
                                    volume={volume}/>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Drum;
