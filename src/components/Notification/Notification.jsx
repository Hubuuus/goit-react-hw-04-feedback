import PropTypes from "prop-types";
import { Component } from "react";
import css from "./Notification.module.css";

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.Notification}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
