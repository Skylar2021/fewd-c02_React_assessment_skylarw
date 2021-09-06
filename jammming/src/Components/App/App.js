import './App.css';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App(props) {
	// const [tracks, setTracks] = useState([])

	let searchResultsinitialState = [
		{
			id: '1',
			name: 'Believe In Live',
			artist: 'Charmaine',
			album: 'My Spiritual Life'
		},
		{
			id: '2',
			name: 'All We Have Is Now',
			artist: 'Charmaine',
			album: 'LOST n FOUND'
		},
		{
			id: '3',
			name: 'The Pink Room',
			artist: 'Ivanna',
			album: 'Single'
		}
	]

	const [searchResults, setSearchResults] = useState(searchResultsinitialState)
	const [playlistName, setPlaylistName] = useState('New Listsss')
	const [playlistTracks, setPlaylistTracks] = useState([
		{
			id: '4',
			name: 'Everything I need',
			artist: 'Skylar Gray',
			album: 'Aquaman Soundtrack'
		}])
	// track should be a object
	const addTrack = track => {
		if (playlistTracks.includes(track)) {
			return
		}
		setPlaylistTracks(playlistTracks => playlistTracks.concat(track))
	}

	const removeTrack = track => {
		setPlaylistTracks(playlistTracks => playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id))

	}

	const updatePlaylistName = (newName) => {
		setPlaylistName(newName)
	}

	const savePlaylist = () => {
		console.log('click')
		let trackURIs = [];
		playlistTracks.forEach(track => { trackURIs.push(track.uri) })
	}

	const search = term =>{
		console.log(term)
	}

	return (
		<div>
			<h1>Ja<span className="highlight">mmm</span>ing</h1>
			<div className="App">
				<SearchBar onSearch={search} />
				<div className="App-playlist">
					<SearchResults searchResults={searchResults} onAdd={addTrack} />
					<Playlist onSave={savePlaylist} onNameChange={updatePlaylistName} onRemove={removeTrack} playlistName={playlistName} playlistTracks={playlistTracks} />
				</div>
			</div>
		</div>
	)
}

export default App