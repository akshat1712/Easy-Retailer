import React from 'react'
import List from '../front_components/List'
import Search from '../front_components/Search'
import Popular from '../front_components/Popular'

export const Front = () => {
  return (
    <div className='main-container'>
      <Search />
      <List />
      <Popular/>
    </div>
  )
}
