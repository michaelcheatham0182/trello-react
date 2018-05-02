import React, { Component } from "react";
import EditField from "./EditField";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onShow = this.onShow.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onClose = this.onClose.bind(this);

    this.state = {
      showAdd: false
    };
  }

  onShow() {
    this.setState({
      showAdd: true
    });
  }

  onAdd(text) {
    const { type, addItem } = this.props;
    addItem({
      type,
      text
    });
    this.onClose();
  }

  onClose() {
    this.setState({
      showAdd: false
    });
  }

  renderEditField() {
    return (
      <EditField
        onAdd={this.onAdd}
        onClose={this.onClose} />
    );
  }

  renderAddItem() {
    return (
      <a href="#" onClick={this.onShow}>Add a card...</a>
    );
  }

  render() {
    const { showAdd } = this.state;
    const itemToShow = showAdd ? this.renderEditField() : this.renderAddItem();
    return (
      <div className="add-item">
        {itemToShow}
      </div>
    );
  }
}

export default AddItem;
