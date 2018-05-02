import * as Actions from "../constants/actions";

/*
{
  type: "TODO",
  item: "Some text"
}
*/
export const addItem = (payload) => ({
  type: Actions.ADD_ITEM,
  payload
});

/*
{
  type: "TODO",
  item: {
    id: 1,
    text: "Some new text"
  }
}
*/
export const updateItem = (payload) => ({
  type: Actions.UPDATE_ITEM,
  payload
});

/*
{
  type: "TODO",
  item: 1
}
*/
export const deleteItem = (payload) => ({
  type: Actions.DELETE_ITEM,
  payload
});

/*
{
  type: "DOING",
  item: 1,
  target: "DONE"
}
*/
export const moveItem = (payload) => ({
  type: Actions.MOVE_ITEM,
  payload
});

