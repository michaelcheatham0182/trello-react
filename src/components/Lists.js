import React from "react";
import List from "./List";

const listTypes = [
  {
    id: "TODO",
    title: "To Do"
  },
  {
    id: "DOING",
    title: "In Progress"
  },
  {
    id: "DONE",
    title: "Done"
  }
];

/*
  items = {
    "TODO" : [{
      id: 1,
      text: "Some data"
    }],
    "DOING" : [{
      id: 2,
      text: "Some data"
    }]
  }
*/

export default (props) => {
  const { items, addItem, deleteItem, updateItem, moveItem } = props;

  const renderLists = (item, index) => (<List
    type={item.id}
    title={item.title}
    items={items && items[item.id]}
    key={index}
    addItem={addItem}
    deleteItem={deleteItem}
    updateItem={updateItem}
    moveItem={moveItem} />
  );

  return (
    <div>
      { listTypes.map(renderLists) }
    </div>
  );
};
