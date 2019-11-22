import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AllArtists extends Component {
    state = {
        allArtists: []
    }

    componentDidMount() {
        axios.get('/api/v1/artist')
            .then((res) => {
                const allArtists = res.data;
                this.setState({ allArtists: allArtists })
            })
    }

    render() {
        return (
            <div>
                {this.state.allArtists.map((artist) => {
                    return (
                        <Link to={`/artist/${artist.id}`}>
                            <div>{artist.name}</div>
                            <img src={artist.photo_url} width="200" />
                        </Link>)
                })}
            </div>
        )
    }
}