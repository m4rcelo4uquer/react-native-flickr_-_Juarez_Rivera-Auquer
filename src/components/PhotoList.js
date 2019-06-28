import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

export default class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

  renderPhoto(photo) {
    return (
    <PhotoDetail
      key={photo.item.id}
      title={photo.item.title}
      imageUrl={`https://farm${photo.item.farm}.staticflickr.com/${photo.item.server}/${photo.item.id}_${photo.item.secret}.jpg`} />
     );
  }

  keyExtractor = (item) => {
    return item.id
  }

  render() {
    if (!this.state.photos) {
			return (
			  <View style={{ flex: 1 }}>
					<Text>
            Loading...
					</Text>
			  </View>
			);
    }
    return (
        <FlatList
          data={this.state.photos}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderPhoto}/>
    );
  }
}

