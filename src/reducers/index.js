import * as Actions from "../constants/actions";
import { combineReducers } from 'redux';

export const initialState = {
  items : {
    "TODO": [],
    "DOING": [],
    "DONE": []
  }
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.ADD_ITEM: {
      const { type, text } = action.payload;
      const itemsByList = [].concat(state.items[type]);
      itemsByList.push({
        text
      });
      const items = Object.assign({}, state.items, {[type]: itemsByList});
      return {
        ...state,
        items
      };
    }
    case Actions.UPDATE_ITEM: {
      const { type, id, text } = action.payload;
      const itemsByList = [].concat(state.items[type]);
      itemsByList.splice(id, 1, { text });
      const items = Object.assign({}, state.items, {[type]: itemsByList});
      return {
        ...state,
        items
      };
    }
    case Actions.DELETE_ITEM: {
      const { type, id } = action.payload;
      const itemsByList = [].concat(state.items[type]);
      itemsByList.splice(id, 1);
      const items = Object.assign({}, state.items, {[type]: itemsByList});
      return {
        ...state,
        items
      };
    }
    case Actions.MOVE_ITEM: {
      const { type, id, target } = action.payload;
      if (type === target) {
        return state;
      }
      const itemsByListSrc = [].concat(state.items[type]);
      const item = itemsByListSrc.splice(id, 1);

      const itemsByListTgt = [].concat(state.items[target]);
      itemsByListTgt.push(item[0]);
      const items = Object.assign({}, state.items, {[type]: itemsByListSrc, [target]: itemsByListTgt});
      return {
        ...state,
        items
      };
    }
    default: 
      return state;
  }
};

const indexReducer = combineReducers({
  data: appReducer
});

export default indexReducer;