import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ good, neutral, bad }) => {
  return (
    <ul className="ul">
      <button type="button" className={css.buttons} onClick={good}>
        Good
      </button>
      <button type="button" className={css.buttons} onClick={neutral}>
        Neutral
      </button>
      <button type="button" className={css.buttons} onClick={bad}>
        Bad
      </button>
    </ul>
  );
};


FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};