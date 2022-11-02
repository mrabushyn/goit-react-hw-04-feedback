import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <span className={css.title}>
      <h2 className="h2">{title}</h2>
      {children}
    </span>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};