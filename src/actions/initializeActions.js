'use strict'

import Dispatcher from '../dispatcher/appDispatcher';
import DessertApi from '../../api/dessertApi'
import ActionTypes from '../constants/actionTypes';


var InitializeActions = {
    initApp: ()=>{
          Dispatcher.dispatch({
                actionType:ActionTypes.INITIALIZE,
                initialData:{
                    dessert: DessertApi.getAllDessert(),

                }
          });
    },
  

}
module.exports = InitializeActions;
