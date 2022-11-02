import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Good:
        <span> {good}</span>
      </li>
      <li className={css.item}>
        Neutral:<span> {neutral}</span>
      </li>
      <li className={css.item}>
        Bad:<span> {bad}</span>
      </li>
      <li className={css.item}>
        Total:<span> {total}</span>
      </li>
      <li className={css.item}>
        Positive feedback:<span> {positivePercentage}%</span>
      </li>
    </ul>
  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};