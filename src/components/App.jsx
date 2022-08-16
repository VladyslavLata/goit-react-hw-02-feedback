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
  };

  addFeedback = feedback => {
    this.setState(state => ({
      [feedback]: state[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 / (good + neutral + bad)) * good);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackMenu
            options={['good', 'neutral', 'bad']}
            onAddFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notificstion message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
