import React, { Component } from "react";

class EditField extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.textField.value = value;
    }
  }

  handleAdd() {
    const { onAdd } = this.props;
    const value = this.textField.value;
    if (value) {
      onAdd(value);
      this.textField.value = null;
    }
  }

  handleClose() {
    const { onClose } = this.props;
    this.textField.value = null;
    onClose();
  }

  render() {
    const { type } = this.props;
    const btnTxt = type === "edit" ? "Save" : "Add";
    return (
      <form className="edit-field">
        <div>
          <textarea rows="5" ref={(textField) => this.textField = textField}>
          </textarea>
        </div>
        <div>
          <button onClick={this.handleAdd} className="btn-primary">{btnTxt}</button>
          <button onClick={this.handleClose} className="btn-secondary">Close</button>
        </div>
      </form>
    );
  }
}

export default EditField;