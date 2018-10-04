/**
 *
 * AddStringForm
 *
 */

import React from 'react';
import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddStringForm from './selectors';
import reducer from './reducer';
import saga from './saga';

const FormWrapper = styled.div`
  margin: 1em 2em;
  width: 100%;
`;

const Button = styled.button`
  color: white;
  border-radius: 5px;
  padding: 0.5em 1em;

  background: ${props => (props.success ? '#73A839' : '#2FA4E7')};
`;

const InputForm = styled.label`
  ${props =>
    props.fullLength &&
    css`
      width: 100%;
    `};
`;

/* eslint-disable react/prefer-stateless-function */
export class AddStringForm extends React.Component {
  state = { inputString: '' };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ inputString: '' });
  };

  render() {
    return (
      <FormWrapper>
        <Helmet>
          <title>AddStringForm</title>
          <meta name="description" content="Description of AddStringForm" />
        </Helmet>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <InputForm htmlFor="inputString" fullLength>
              String:
              <input
                className="form-control"
                type="text"
                name="inputString"
                id="inputString"
                onChange={this.handleChange}
                value={this.state.inputString}
                placeholder="enter a string"
              />
            </InputForm>
          </div>

          <Button type="submit" success>
            Add
          </Button>
        </form>
      </FormWrapper>
    );
  }
}

// AddStringForm.propTypes = {
//   // dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  addstringform: makeSelectAddStringForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'addStringForm', reducer });
const withSaga = injectSaga({ key: 'addStringForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddStringForm);
