/*
** Operations
** Add Item - Link/Btn at bottom of the list
** Delete Item
** Update Item
** Move Item across Lists
** Rearrange Item
*/

import React, { Component } from "react";
import { DragSource } from 'react-dnd';
import EditField from "./EditField";

const Types = {
  CARD: 'card'
};

const cardSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const { type, id } = props;
    const item = { type, id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onShow = this.onShow.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      showEdit: false
    };
  }

  onShow() {
    this.setState({
      showEdit: true
    });
  }

  onSave(text) {
    const { id, type, updateItem } = this.props;
    updateItem({
      id,
      type,
      text
    });
    this.onClose();
  }

  onClose() {
    this.setState({
      showEdit: false
    });
  }

  onDelete() {
    const { id, type, deleteItem } = this.props;
    deleteItem({ id, type });
  }

  renderEditField() {
    const { item } = this.props;
    const { text } = item;
    return (
      <EditField
        type="edit"
        value={text}
        onAdd={this.onSave}
        onClose={this.onClose} />
    );
  }

  renderTextItem() {
    const { item } = this.props;
    const { text } = item;

    return (
      <div className="list-item">
        <div className="action-icons">
          <a href="#" onClick={this.onShow}>
            <i className="far fa-edit"></i>
          </a>
          <a href="#" onClick={this.onDelete}>
            <i className="far fa-trash-alt"></i>
          </a>
        </div>
        <article onClick={this.onShow}>
          {text}
        </article>
      </div>
    );
  }

  render() {
    const { showEdit } = this.state;
    const { isDragging, connectDragSource } = this.props;
    const itemToShow = showEdit ? this.renderEditField() : this.renderTextItem();
    const itemStyle = {
      opacity: "0.3"
    };

    return connectDragSource(
      <div className="list-item-wrapper" style={isDragging ? itemStyle: null}>
        {itemToShow}
      </div>
    );
  }
}

export default DragSource(Types.CARD, cardSource, collect)(ListItem);
