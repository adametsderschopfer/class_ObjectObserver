"use strict";

import { TObjectObserver } from "./types";

let handlers = Symbol("handlers");

function ObjectObserver(target?: object): TObjectObserver {
  // 1. Create a object of handlers
  target[handlers] = [];

  // put there handler functions for transportation in the future
  target.observe = function (handler) {
    this[handlers].push(handler);
  };

  // 2. Create a proxy to react to changes
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); // redirect the operation to the original object
      if (success) {
        // if no error occurred while writing the property
        // call the handlers
        target[handlers].forEach((handler) => handler(property, value));
      }
      return success;
    },
  });
}

(<TObjectObserver>window.ObjectObserver) = ObjectObserver;
