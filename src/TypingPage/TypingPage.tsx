import React from "react";
import Insult, {InsultState} from "../components/Insult";

export interface TypingProps {
    insults: string[];
}

export interface TypingState {
    currentInsult: number;
    typedText: string;
}

class TypingPage extends React.Component<TypingProps, TypingState> {
    constructor(props: TypingProps) {
        super(props);

        this.state = {
            currentInsult: 1,
            typedText: ""
        };
    }

    render() {
        const {currentInsult, typedText} = this.state;
        return (
            <>
            {this.props.insults.map((insult, index) => {
                let state = (index < currentInsult ? InsultState.COMPLETE 
                    : (index === currentInsult ? InsultState.CURRENT : InsultState.UPCOMING));
                return <Insult text={insult} state={state} typedText={typedText} />
            })}
            </>
        );
    }
}

export default TypingPage;
