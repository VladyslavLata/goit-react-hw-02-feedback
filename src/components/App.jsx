import { Component } from 'react';
import { FeedbackMenu } from './FeedbackMenu/FeedbackMenu';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notificstion } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  addFeedback = e => {
    const { textContent } = e.target;
    this.setState(state => ({
      [textContent.toLowerCase()]: state[textContent.toLowerCase()] + 1,
    }));
  };

  // addFeedback = feedback => {
  //   switch (feedback) {
  //     case 'Good':
  //       this.setState(state => ({
  //         good: state.good + 1,
  //       }));
  //       break;
  //     case 'Neutral':
  //       this.setState(state => ({
  //         neutral: state.neutral + 1,
  //       }));
  //       break;
  //     case 'Bad':
  //       this.setState(state => ({
  //         bad: state.bad + 1,
  //       }));
  //       break;
  //     default:
  //       console.log('wtf ?');
  //   }
  // };

  countTotalFeedback = () =>
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));

  countPositiveFeedbackPercentage = () =>
    this.setState(({ total, good }) => ({
      positiveFeedback: Math.round((100 / total) * good),
    }));

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackMenu
            btnsName={['Good', 'Neutral', 'Bad']}
            onAddFeedback={this.addFeedback}
            onTotalFeedback={this.countTotalFeedback}
            onPositiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notificstion message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
