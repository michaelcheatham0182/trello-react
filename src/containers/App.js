import React from "react";
import { connect } from "react-redux";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import "../styles/main.css";

import Body from "../components/Body";
import Lists from "../components/Lists";

import * as Actions from "../actions/actions";

let App = (props) => (
  <Body boardName="Sprint Tasks">
    <div className="lists-wrapper">
      <Lists {...props} />
    </div>
  </Body>
);

const mapStateToProps = ({ data }) => ({
  items: data.items
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => { dispatch(Actions.addItem(payload)) },
  updateItem: (payload) => { dispatch(Actions.updateItem(payload)) },
  deleteItem: (payload) => { dispatch(Actions.deleteItem(payload)) },
  moveItem: (payload) => { dispatch(Actions.moveItem(payload)) }
});

App = DragDropContext(HTML5Backend)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
