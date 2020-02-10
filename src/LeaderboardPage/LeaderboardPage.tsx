import React from 'react';
import kbWarriorsLogo from "../resources/keyboardWarriors.png";
import { Leaderboard } from '../components/Leaderboard/Leaderboard';

export class LeaderboardPage extends React.Component {
    render() {
      return (
          <div>
              <Leaderboard/>
          </div>
      );
    }
  }