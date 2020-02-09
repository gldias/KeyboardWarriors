import React from "react";
import Insult, {InsultState} from "../components/Insult/Insult";
import Timer from "../components/Timer/Timer";

export interface TypingProps {
    insults: string[];
}

export interface TypingState {
    currentInsult: number;
    typedText: string;
}

// game page where players type insults as quickly as possible
class TypingPage extends React.Component<TypingProps, TypingState> {
    _timer: React.RefObject<Timer>;

    constructor(props: TypingProps) {
        super(props);

        this.state = {
            currentInsult: 0,
            typedText: ""
        };

        this._timer = React.createRef();
        this.textChanged = this.textChanged.bind(this);
    }

    // handles change of text in text box
    textChanged(e: React.FormEvent<HTMLInputElement>) {
        const currentText = e.currentTarget.value;
        const {currentInsult} = this.state;

        this.setState({typedText: currentText});

        // determine if insult is complete
        if(currentText === this.props.insults[currentInsult]) {
            this.setState({
                currentInsult: currentInsult + 1,
                typedText: ""
            });

            // stop timer if the last insult was completed
            if(this.props.insults.length === currentInsult + 1) {
                this._timer.current!.stop();
            }
        }
    }

    render() {
        const {currentInsult, typedText} = this.state;
        
        return (
            <>
            <Timer ref={this._timer}/>
            {this.props.insults.map((insult, index) => {
                let state = (index < currentInsult ? InsultState.COMPLETE 
                    : (index === currentInsult ? InsultState.CURRENT : InsultState.UPCOMING));
                return <Insult key={insult} text={insult} state={state} typedText={typedText} />
            })}
            <input onChange={this.textChanged} value={typedText} />
            </>
        );
    }
}

export default TypingPage;
