import React, { useState } from "react";
import {Provider} from "react-redux"
import TodoApp from "./TodoApp";
import { store } from "../redux/store";

export interface FullDetailsProps {
  callBack: (id: number) => string;
}

const FullDetails = ({ callBack }: FullDetailsProps) => {
  console.log(store, 'store')
  return (
    <Provider store={store}>
      <h1>
        {callBack(123)}
      </h1>
      <TodoApp />
    </Provider>
  );
};

export default FullDetails;
