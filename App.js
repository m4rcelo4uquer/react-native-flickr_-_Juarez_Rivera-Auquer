import React from 'react'
import AlbumList from './src/components/AlbumList'
import PhotoList from './src/components/PhotoList'
import { Router, Scene } from 'react-native-router-flux'

export default function App () {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='albumList' component={AlbumList} title='Albums' initial />
        <Scene key='photoList' component={PhotoList} title='Photos' />
      </Scene>
    </Router>
  )
};
