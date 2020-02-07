import React from 'react';
import './App.css';
import TypingPage from "./TypingPage";

interface MyProps {};
interface MyState {
  testState: string,
};

// TODO: this is just here until the routing and everything is set up, so it should be removed eventually
let insults = ["Your father was a hamster and your mother smelt of eldeberries", "You are dumb", "I dislike you"];

class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      testState: "save",
    }
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <TypingPage insults={insults}/>
      </div>
    );
  }
}

export default App;