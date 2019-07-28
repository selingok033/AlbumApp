import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums?fbclid=IwAR2fyaL7YqRbp-f51uZYa4QLJdh2QzhOqW3q0TGJOTpw3cfTQifpd75QbW8")
            .then(response => this.setState({albums: response.data }));
    }

    renderAlbums () {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;
