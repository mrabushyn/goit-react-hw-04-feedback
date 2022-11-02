import { useState } from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';


export function Feedback ({initialValue, step, initialValuePercentage}) {
  const [valueForGood, setValueForGood] = useState(initialValue);
  const [valueForNeutral, setValueForNeutral] = useState(initialValue);
  const [valueForBad, setValueForBad] = useState(initialValue);
  const [valueForTotal, setValueForTotal] = useState(initialValue);
  const [valueForPercentage, setValueForPercentage] = useState(
    initialValuePercentage
  );

  const handleIncrementForGood = () => {
    setValueForGood(valueForGood + step);
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const handleIncrementForNeutral = () => {
    setValueForNeutral(valueForNeutral + step);
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const handleIncrementForBad = () => {
    setValueForBad(valueForBad + step);
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const  countTotalFeedback = () => {
setValueForTotal(valueForGood + valueForNeutral + valueForBad)
    }

  const countPositiveFeedbackPercentage = () => {
setValueForPercentage ( ((valueForGood / valueForTotal) *  100).toFixed(0) )
    }

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


Feedback.propTypes = {
  step: PropTypes.number,
  initialValue: PropTypes.number,
  initialValuePercentage: PropTypes.number,
};



