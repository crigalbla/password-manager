import React, { cloneElement, useState } from 'react';

import './style.scss';

const Input = ({
  error,
  id,
  name,
  onChange,
  rightAddon,
  placeholder,
  type,
  value,
  maxlength,
}) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mainClassName = `custom-input${error ? ' error' : ''}${focused ? ' focused' : ''}${hovered ? ' hovered' : ''}${value ? ' filled' : ''}`;

  return (
    <div className={mainClassName}>
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
      <div>
        <div>
          <input
            id={id}
            name={name}
            onChange={(e) => onChange && onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            maxLength={maxlength}
            value={value}
            type={type}
          />
          {rightAddon && cloneElement(rightAddon, { className: `${rightAddon.props.className} input-suffix` })}
        </div>
      </div>
      <span className={!error ? 'hidden' : ''}>{error}</span>
    </div>
  );
};

export default Input;
