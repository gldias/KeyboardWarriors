import React from "react";
import Insult, {InsultState} from "../components/Insult/Insult";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Timer from "../components/Timer/Timer";
import "./typingPage.css";

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
            <Container className="typing-container">
                <Timer ref={this._timer}/>
                <Row className="justify-content-md-center">
                    <ListGroup variant="flush">
                            {this.props.insults.map((insult, index) => {
                                let state = (index < currentInsult ? InsultState.COMPLETE 
                                    : (index === currentInsult ? InsultState.CURRENT : InsultState.UPCOMING));
                                return (
                                    <ListGroup.Item className="insult-item">
                                        <Insult key={insult} text={insult} state={state} typedText={typedText} />
                                    </ListGroup.Item>)
                            })}
                    </ListGroup>
                </Row>
                <Row className="justify-content-md-center input-box">
                    <input onChange={this.textChanged} value={typedText} />
                </Row>
            </Container>
        );
    }
}

export default TypingPage;
