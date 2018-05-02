/*
** ToDo, InProgress, Done
*/
import React, { Component } from "react";
import { DropTarget } from 'react-dnd';

import ListItem from "./ListItem";
import AddItem from "./AddItem";

const Types = {
  CARD: 'card'
};

const itemTarget = {
  canDrop(props, monitor) {
    const { type } = props;
    const item = monitor.getItem();
    return type !== item.type;
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    const { moveItem, type } = props;
    const item = monitor.getItem();
    moveItem({
      type: item.type,
      id: item.id,
      target: type
    });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class List extends Component {
  constructor(props) {
    super(props);
    this.renderListItem = this.renderListItem.bind(this);
  }

  renderDropTarget() {
    return (
      <div className="drop-overlay" />
    );
  }

  renderListItem(item, index) {
    const { type, deleteItem, updateItem } = this.props;
    return (
      <ListItem
        item={item}
        id={index}
        key={index}
        type={type}
        deleteItem={deleteItem}
        updateItem={updateItem} />
    );
  }

  render() {
    let { type, title, addItem, items } = this.props;
    const { canDrop, connectDropTarget } = this.props;
    items = items ? items : [];
    const overlay = canDrop && this.renderDropTarget();

    return connectDropTarget(
      <div className="list-wrapper">
        <section className="list">
          <h3>{title}</h3>
          <div>
            { items.map(this.renderListItem) }
          </div>
        </section>
        <AddItem type={type} addItem={addItem} />
        {overlay}
      </div>
    );
  }
}

export default DropTarget(Types.CARD, itemTarget, collect)(List);
