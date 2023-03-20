const API_URL = 'https://api.spotify.com/v1';

// export async function getPlaylists(token) {
// 	const response = await fetch(`${API_URL}/me/playlists`, {
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	});

// 	const data = await response.json();
// 	return data;
// 	if (response.ok) {
// 		return data.items;
// 	} else {
// 		throw new Error(data.error.message);
// 	}
// }

const SpotifyService = {
	async getPlaylists(token) {
		const response = await fetch(`${API_URL}/me/playlists`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
    if (!response.ok) {
      const error = {
        status: response.status,
        message: 'Vuelve a autenticarte en Spotify para continuar.'
      };
      console.log({error})
      throw error;
    }
    const data = await response.json();

    return data;
	},
};

export default SpotifyService;
