import React from 'react';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleDelete() {
    this.props.onDelete();
    this.handleCloseModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Delete</button>

        {
          this.state.showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.handleCloseModal}>×</span>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={this.handleDelete}>Confirm</button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default DeleteModal;