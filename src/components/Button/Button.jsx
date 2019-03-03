import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'

export default function Button(props) {
  return (
    <a className={"button"+(props.style_theme && " _theme-"+props.style_theme)+(props.style_isBlock ? " _block" : "")}
        href={props.href} 
        target={props.target}
        onClick={props.onClick}>
        {props.content}</a>
  )
}

Button.propTypes = {
  /** Apply theme-based styles */
  style_theme: PropTypes.string,
  /** If true, sets the button as a full width block */
  style_isBlock: PropTypes.bool,
  /** Destination URL (If the button is a link) */
  href: PropTypes.string,
  /** Wheather open the link in a new tab / window or not (If the button is a link)*/
  target: PropTypes.oneOf([null, '_blank']),
  /** onClick event handler (if the button is not a link) */
  onClick: PropTypes.func,
  /** Content inside the button */
  content: PropTypes.any.isRequired
}

Button.defaultProps = {
  style_theme: "primary",
  style_isBlock: false
};
