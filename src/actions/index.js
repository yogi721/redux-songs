// Action creator
export const SelectSongs = () => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}