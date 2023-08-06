import PropTypes from "prop-types";
import css from "./Section.module.css";

export function Section({ title, children }) {
  return (
    <>
      <h2 className={css.Section}>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
