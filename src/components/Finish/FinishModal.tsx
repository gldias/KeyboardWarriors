import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./FinishModal.css";
import good from "../../resources/goodJob.png";
import bad from "../../resources/badJob.png";

export interface FinishProps{
    active: boolean;
    speed: number;
    time: number;
}

export interface FinishState{
    active: boolean;
    name: string;
}

export class FinishModal extends React.Component<FinishProps,FinishState> {
    constructor(props: FinishProps){
        super(props);

        this.state = {
            active: props.active,
            name: ""
        };
        
    }
    
    render(){
        const {active, name} = this.state;

        return(
            <Modal show={active}>
                <Modal.Body>
                    <img className="finish"
                        alt="Try harder."
                        src={bad}                    
                    ></img>
                    <h1 className="try-harder">Try Harder.</h1>
                    <Row className="results">
                        <Col xs={6}>
                            <h4 className="result-column"><b>Speed:</b> {this.props.speed}</h4>
                        </Col>
                        <Col xs={6}>
                            <h4 className="result-column"><b>Time:</b> {this.props.time}</h4>
                        </Col>
                    </Row>
                    <Row className="update-leaderboard">
                        <Col xs={6}>

                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}