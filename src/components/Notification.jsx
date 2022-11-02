import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Notification = ({ message }) => {
  return (
    <span>
      <h3 className={css.notification}>{message}</h3>
    </span>
  );
};



Notification.propTypes = {
  message: PropTypes.string.isRequired,

};