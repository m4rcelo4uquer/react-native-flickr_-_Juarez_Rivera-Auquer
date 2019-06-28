import React, { Component } from 'react';
import axios from 'axios';
import { FlatList } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { Button } from 'react-native-elements';

class AlbumList extends Component {
  state = { photoSet: null };

  componentWillMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1')
      .then(response => this.setState({ photoSet: response.data.photosets.photoset }));
  }

  renderAlbum(album) {
    return (
      <AlbumDetail key={album.item.id}
                   title={album.item.title._content}
                   albumId={album.item.id}  />
    );
  }

  keyExtractor = (item) => {
    return item.id
  }

  render() {
    if (!this.state.photoSet) {
			return (
        <Button
          backgroundColor = '#397af8'
          title="Cargando..."
          loading
        />
				);
    }
    return (
      <FlatList
        data={this.state.photoSet}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderAlbum}/>
    );
  }
}

export default AlbumList;
