// import { Feedback } from './Feedback';
import { useState, useMemo } from 'react';
import css from './Feedback.module.css';


import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

const initialValue = 0;
const step = 1;
const initialValuePercentage = 100;

export function App() {

  const [valueForGood, setValueForGood] = useState(initialValue);
  const [valueForNeutral, setValueForNeutral] = useState(initialValue);
  const [valueForBad, setValueForBad] = useState(initialValue);
  const [valueForTotal, setValueForTotal] = useState(initialValue);
  const [valueForPercentage, setValueForPercentage] = useState(
    initialValuePercentage
  );

  const handleIncrementForGood = () => {
    setValueForGood(prevState => prevState + step);
  };

  const handleIncrementForNeutral = () => {
    setValueForNeutral(prevState => prevState + step);
  };

  const handleIncrementForBad = () => {
    setValueForBad(prevState => prevState + step);
  };

  useMemo(() => {
    return setValueForTotal(valueForGood + valueForNeutral + valueForBad);
  }, [valueForGood, valueForNeutral, valueForBad]);

  useMemo(() => {
    setValueForPercentage(((valueForGood * 100) / valueForTotal).toFixed());
    return Number(valueForPercentage);
  }, [valueForGood, valueForTotal, valueForPercentage]);

  return (
    <div className={css.mainContainer}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          good={handleIncrementForGood}
          neutral={handleIncrementForNeutral}
          bad={handleIncrementForBad}
        />
      </Section>

      <Section title="Statistics">
        {valueForTotal === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={valueForGood}
            neutral={valueForNeutral}
            bad={valueForBad}
            total={valueForTotal}
            positivePercentage={valueForPercentage}
          />
        )}
      </Section>
    </div>
  );
}

