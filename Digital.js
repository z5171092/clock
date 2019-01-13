import React from 'react';
import "./digital.scss";

export default ({time}) => {

    const seconds = time.format('ss');
    const minutes = time.format('mm');
    const hours = time.format('h');


    return (
        <div className="Digital">
            <div className="value hours">{hours}</div>
            <div className={`separator ${(seconds % 2 === 0)?'on':'off'}`}>:</div>
            <div className="value minutes">{minutes}</div>
            <div className="value seconds">{seconds}</div>
        </div>
    )
};

/*


export default class Digital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(),
            blink: true
        };
    }
    tick() {
        this.setState({
            time: moment(),
            blink: !this.state.blink
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 1000);
    }
    render() {
        const {time} = this.state;
        const seconds = time.format('ss');
        const minutes = time.format('mm');
        const hours = time.format('h');
        return (
            <div className="Digital">
                <div className="value hours">{hours}</div>
                <span className={this.state.blink?'on':'off'}>:</span>
                <div className="value minutes">{minutes}</div>
                <span className={this.state.blink?'on':'off'}>:</span>
                <div className="value seconds">{seconds}</div>
            </div>
        );
    }
}
*/
