const API_URL = "https://api.deezer.com";

export async function convertPlaylist(token, playlistId) {
  const response = await fetch(`${API_URL}/playlist/${playlistId}/tracks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      playlist_id: playlistId,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.error.message);
  }
}
