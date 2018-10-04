/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */

import styled from 'styled-components';

const HeaderLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Welcome to the best website ever!</h1>
        <LinkWrapper>
          <HeaderLink to="/add">Add</HeaderLink>
          <HeaderLink to="/view">View</HeaderLink>
        </LinkWrapper>
      </div>
    );
  }
}
