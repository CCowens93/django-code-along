import React, { Component } from 'react'
import axios from 'axios'

export default class SingleArtist extends Component {
    state = {
        name: '',
        photo_url: '',
        nationality: '',
        songs: []
    }

    componentDidMount() {
        // lets get data for single artist when component mounts
        const artistId = this.props.match.params.artistId
        axios.get(`/api/v1/artist/${artistId}`)
            .then((res) => {
                console.log(res.data)
                this.setState(res.data)
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.photo_url}</p>
                <p>{this.state.nationality}</p>
                <img src={this.state.photo_url} width="350" />
            </div>
        )
    }
}