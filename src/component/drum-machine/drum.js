import './drum.scss';

import {Component} from "react";
import DrumItem from "./drum-item";

class Drum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    keyCode: 81,
                    keyTrigger: 'Q',
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                }, {
                    keyCode: 87,
                    keyTrigger: 'W',
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                }, {
                    keyCode: 69,
                    keyTrigger: 'E',
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                }, {
                    keyCode: 65,
                    keyTrigger: 'A',
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                }, {
                    keyCode: 83,
                    keyTrigger: 'S',
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                }, {
                    keyCode: 68,
                    keyTrigger: 'D',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                }, {
                    keyCode: 90,
                    keyTrigger: 'Z',
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                }, {
                    keyCode: 88,
                    keyTrigger: 'X',
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                }, {
                    keyCode: 67,
                    keyTrigger: 'C',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                },
            ],
            displayInput: 'fish text',
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
        const {data, displayInput, volume} = this.state;
        return (
            <div className={'drum'} id={'drum-machine'}>
                <div className={'drum__header'} id="display">
                    <h1 className="drum__header-text">
                        {displayInput}
                    </h1>
                </div>
                <div className="drum__controls">
                    <input type="range" value={volume} onChange={(e) => this.updateVolume(e)}/>
                    <input type="checkbox"/>
                </div>

                <div className="drum__content">
                    {
                        data.map((item, i) => {
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
