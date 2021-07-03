import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  text-align: center;
  height: auto;
  width: auto;
  font-size: 8rem;
  border-radius: 25px;
  margin: 1px;

  // dynamic properties
  color: ${props => props.textcolor || 'ghostwhite'};
  background: ${props => props.btncolor || '#736BFB'};
  grid-column-end: ${props => props.colend || 'auto'};
  grid-column-start: ${props => props.colorigin || 'auto'};
  :hover {
    font-size: 10rem;
    color: #64cded;
    cursor: pointer;
  }
  :active {
    color: #ff0080;
    cursor: grabbing;
    background: #b2ff00;
  }
`;

const Button = (props) => {
  const {
      val,
      group,
      btncolor,
      textcolor,
      colorigin,
      colend,
      action,
    } = props;

  return (
    <StyledButton
      className={group}
      btncolor={btncolor}
      textcolor={textcolor}
      colorigin={colorigin}
      colend={colend}
    >
      {val}
    </StyledButton>
  );
};

export default Button;