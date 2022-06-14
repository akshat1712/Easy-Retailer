import React from 'react'
import Popular from './Shared/Popular'

import Search from './customer/Search'

import { InventoryAdd } from './retailer/InventoryAdd'

import List from './Shared/List'

import './styling/styles.css'

let login=1;

export const Front = () => {
  return (
    <div className='main-container'>
      {login? <InventoryAdd/>:<Search />}
      <List login={login}/>
      <Popular login={login}/>
    </div>
  )
} 
