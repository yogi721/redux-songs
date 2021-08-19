// Action creator
export const SelectSongs = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}