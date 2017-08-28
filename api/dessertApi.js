'use strict'

import React, { Component } from 'react';

import _ from 'lodash';

const Info = {
    name:"浪味仙",
    subName:"创意花式薯卷",
    flavour:[
      {
        name:"田园蔬菜口味",
        value:0,
        img:'./img/浪味仙01.png'
      },
      {
        name:"韩式泡菜口味",
        value:1,
        img:'./img/浪味仙02.png'
      },
      {
        name:"海苔口味",
        value:2,
        img:'./img/浪味仙03.png'
      },
    ],
    size:[
      {
        name:"大包|84G/克",
        value:"Large",
        price:"$6.99",
      },
      {
        name:"小包|42G/克",
        value:"Small",
        price:"$4.99",
      },
    ],
}

const orderInfo = [
      {
          item:'旺旺 浪味仙蔬菜味',
          size: '42g',
          quantity:1,
          price:'$4.99',
          img:require('./产品页-切图/浪味仙01.png')
      },
      {
          item:'大白兔奶糖',
          size: '180g',
          quantity:1,
          price:'$14.99',
          img:require('./产品页-切图/浪味仙03.png')
      },
      {
          item:'SAMYANG 辣鸡面',
          size: '140g*5*',
          quantity:2,
          price:'$9.99',
          img:require('./产品页-切图/浪味仙02.png')
      },
      {
          item:'大白兔奶糖',
          size: '180g',
          quantity:1,
          price:'$14.99',
          img:require('./产品页-切图/浪味仙01.png')
      },

]

var customer={
    name:'Qiao',
    phone:'647-895-0624',
    address:"Unit 1905, 20 Olive Ave, North York, M2N 7G5, Canada"
}

var _basket = [
  {
    flavour:"田园蔬菜口味",
    size:"Small",
    quantity:2,
  },
  {
    flavour:"韩式泡菜口味",
    size:"Large",
    quantity:1,
  },
];//imitation of data from backend
var DessertApi = {
  getAllDessert(){
      return _basket;
  },
  addDessert(dessert){
    _basket.push(dessert)
    return dessert;
  },
  getOrderedItems(){
    return orderInfo;
  },
  getCustomerInfo(){
    return customer;
  }
}
module.exports =  DessertApi;
