import React from "react";
import styles from "./Button.scss";
import PropTypes from "prop-types";

const Button = props => (
  <button className={styles.Button} type={props.type} onClick={props.onClick}>
    {props.label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"])
};


Button.defaultProps = {
  type: "button"
}

export default Button;
