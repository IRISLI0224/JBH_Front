import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Modal extends React.Component { //eslint-disable-line

  render() {
    const { visible } = this.props;
    return visible && (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title">Add  availability successful</div>
        <div className="modal-operator">
          <button type="submit" className="modal-operator-confirm">
            <Link to="/admin/addsession" style={{ color: 'white', textDecoration: 'none' }}>
              Confirm
            </Link>
          </button>
        </div>
      </div>
      <div className="mask" />
    </div>
    );
  }
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Modal;
