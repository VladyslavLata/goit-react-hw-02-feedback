import { Component } from 'react';
import { FeedbackMenu } from './FeedbackMenu/FeedbackMenu';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  addFeedback = feedback => {
    switch (feedback) {
      case 'Good':
        this.setState(state => ({
          good: state.good + 1,
        }));
        break;
      case 'Neutral':
        this.setState(state => ({
          neutral: state.neutral + 1,
        }));
        break;
      case 'Bad':
        this.setState(state => ({
          bad: state.bad + 1,
        }));
        break;
      default:
        console.log('wtf ?');
    }
  };

  countTotalFeedback = () =>
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));

  countPositiveFeedbackPercentage = () =>
    this.setState(({ total, good }) => ({
      positiveFeedback: Math.round((100 / total) * good),
    }));

  render() {
    return (
      <>
        <FeedbackMenu
          title="Please leave feedback"
          btnsName={['Good', 'Neutral', 'Bad']}
          onAddFeedback={this.addFeedback}
          onTotalFeedback={this.countTotalFeedback}
          onPositiveFeedback={this.countPositiveFeedbackPercentage}
        />
        <Statistics state={this.state} />
      </>
    );
  }
}
