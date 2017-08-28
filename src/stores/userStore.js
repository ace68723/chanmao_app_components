'use strict'

import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
const EventEmitter = require('events');
import assign from 'object-assign';
const CHANGE_EVENT = 'change';
const myEE = new EventEmitter()
var user_store = this;
var _dessert = [];
var _customer ={};
var UserStore = assign({}, myEE.prototype, {
      addChangeListener: (callback)=>{
          myEE.addListener(CHANGE_EVENT, callback);
      },
      removeChangeListener: (callback)=>{
          myEE.removeListener(CHANGE_EVENT, callback);
      },
      emitChange: ()=>{
          myEE.emit(CHANGE_EVENT);
      },
      returnDessert: ()=>{
          return _dessert;
      },
      returnCustomer: ()=>{
          return _customer;
      }
});

Dispatcher.register((action) => {
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _dessert = action.initialData.dessert;
            UserStore.emitChange();
            break;
        case ActionTypes.ADD_DESSERT:
            _dessert.push(action.dessert);
            UserStore.emitChange();
            break;
        case ActionTypes.GETORDERINFO:
            _dessert = action.orderData.items;
            UserStore.emitChange();
            break;
        case ActionTypes.GETCUSTOMERINFO:
            _customer = action.customerData.customer;
            UserStore.emitChange();
            break;
        default:
            //no op

    }
});

module.exports = UserStore;
