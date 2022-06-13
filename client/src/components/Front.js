import React from 'react'
import List from './customer/List'
import Search from './customer/Search'
import Popular from './Shared/Popular'
import { InventoryList } from './retailer/InventoryList'
import { InventoryAdd } from './retailer/InventoryAdd'

import './styling/styles.css'

let login=1;

export const Front = () => {
  return (
    <div className='main-container'>
      {login? <InventoryAdd/>:<Search />}
      {login? <InventoryList/>:<List />}
      <Popular login={login}/>
    </div>
  )
} 
