import PropTypes from "prop-types";
import { Component } from "react";
import css from "./FeedbackOptions.module.css";

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.ListBtn}>
        {options.map(option => (
          <button className={css.Btn} type='submit' key={option} name={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </ul>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
