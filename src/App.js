import { useState } from 'react';
import Container from './components/Container/Container';
// import Counter from './components/Counter/Counter';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Feedbackoptions from './components/FeedbackOptions/FeedbackOptions';

import Notification from './components/Notification/Notification';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const handleIncrementStat = ({ target: { textContent } }) =>
    setState(prevState => ({
      ...prevState,
      [textContent]: state[textContent] + 1,
    }));

  return (
    <Container>
      <Section title="Please leave feedback">
        <Feedbackoptions
          options={Object.keys(state)}
          onLeaveFeedback={handleIncrementStat}
        />
      </Section>
      {countTotalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            countPositive={countPositiveFeedbackPercentage}
          />
        </Section>
      )}
    </Container>
  );
};

export default App;
