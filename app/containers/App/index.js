/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import HomePage from 'containers/HomePage/Loadable';
import AddStringForm from 'containers/AddStringForm/Loadable';
import DisplayStrings from 'containers/DisplayStrings/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HeaderPage from 'components/HeaderPage';

const ConetentWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 5em auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: row;
  justify-content: center;
`;

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - String" defaultTitle="String">
        <meta name="description" content="A React application" />
      </Helmet>
      <HeaderPage />
      <ConetentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddStringForm} />
          <Route exact path="/view" component={DisplayStrings} />
          <Route component={NotFoundPage} />
        </Switch>
      </ConetentWrapper>
    </div>
  );
}
