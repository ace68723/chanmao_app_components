'use strict'
import Dispatcher from '../dispatcher/appDispatcher';
import DessertApi from '../../api/dessertApi'
import ActionTypes from '../constants/actionTypes';
var UserActions = {
      addDessert:(dessert)=>{
          var choice = DessertApi.addDessert(dessert);

          Dispatcher.dispatch({
              actionType: ActionTypes.ADD_DESSERT,
              dessert: choice,
          });

      },
      getOrderInfo: ()=>{
            Dispatcher.dispatch({
                  actionType:ActionTypes.GETORDERINFO,
                  orderData:{
                      items: DessertApi.getOrderedItems(),

                  }
            });
      },
      getCustomerInfo: ()=>{
            Dispatcher.dispatch({
                  actionType:ActionTypes.GETCUSTOMERINFO,
                  customerData:{
                      customer: DessertApi.getCustomerInfo(),

                  }
            });
      },
};

module.exports = UserActions;
