/**
 *
 * HeaderPage
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavLinks = styled(Link)`
  margin-left: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
class HeaderPage extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLinks className="navbar-brand mr-5" to="/">
            Brand
          </NavLinks>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLinks className="nav-link" to="/add">
                  Add String
                </NavLinks>
              </li>
              <li className="nav-item">
                <NavLinks className="nav-link" to="/view">
                  View Strings
                </NavLinks>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

HeaderPage.propTypes = {};

export default HeaderPage;
