// Client ID: f357eb7d14144e5aafe2011b93976ea6
// Send a search request to the Spotify API
// Save a user’s playlist to their Spotify account

const clientID = 'client_id=f357eb7d14144e5aafe2011b93976ea6'
const redirectURI = 'redirect_uri=http://localhost:3000'
let token = null, expiredTime = null



// 'https://accounts.spotify.com/authorize?${clientID}&response_type=token&scope=playlist-modify-public&${redirectURI}'

// Get a Spotify user’s access token
let Spotify = {
    isValidToken(){
        
    },
    GetAccessToken() {
        if (token) {
            return token
        }
        token = window.location.href.match(/access_token=([^&]*)/)
        expiredTime = window.location.href.match(/expires_in=([^&]*)/)
        if (token && expiredTime) {
            return token
        } else {
            window.location = `https://accounts.spotify.com/authorize?${clientID}&${redirectURI}&response_type=token`
            // window.setTimeout(() => {
            //     token = null
            // }, expiredTime * 1000)
            return token
        }

    },
    async Search(term) {
        console.log(token)
        let response = await fetch(`https://api.spotify.com/v1/search?type=track,artist&q=${term}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token[1]}` },
        })
        if (response.ok) {
            let data = await response.json()
            // console.log(data)
            return data.tracks.items
        }else{
        //     window.location = `https://accounts.spotify.com/authorize?${clientID}&${redirectURI}&response_type=token`
        //     token = window.location.href.match(/access_token=([^&]*)/)
        //     expiredTime = window.location.href.match(/expires_in=([^&]*)/)
        }

    }
}
export default Spotify