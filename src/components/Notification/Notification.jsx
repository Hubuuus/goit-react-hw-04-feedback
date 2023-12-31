import PropTypes from "prop-types";
import css from "./Notification.module.css";

export function Notification({ message }) {
  return <p className={css.Notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
