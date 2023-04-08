const playlistId = "PLFCgv3qvf3d1JHUOs8375ltdtCKF-Z6SH";
const channelId = "UCEUJf0PFja9TCGL7xuThrbg";
const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PLFCgv3qvf3d1JHUOs8375ltdtCKF-Z6SH&key=AIzaSyBbEL1qznpMIVQiJQym68uZRt-45JqfqJI";

export async function getYtVideos(): Promise<void | {}> {
  const res = await fetch(YOUTUBE_PLAYLIST_ITEMS_API);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
console.log("data", data);
