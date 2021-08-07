import React from 'react';
import './Modal.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Modal extends React.Component { //eslint-disable-line

  render() {
    const { visible, history } = this.props;
    return (
      visible && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-title">Add availability successful</div>
            <div className="modal-operator">
              <button
                type="submit"
                className="modal-operator-confirm"
                onClick={() => {
                  history.push({
                    pathname: '/admin/addsession',
                    adminName: history.location.adminName,
                  });
                }}
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="mask" />
        </div>
      )
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      adminName: PropTypes.string,
    }),
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Modal);
