import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '3:13' },
        { title: 'Macarena', duration: '2:12' },
        { title: 'All Star', duration: '4:14' },
        { title: 'I want it That Way', duration: '3:44' }
    ]
}

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
})