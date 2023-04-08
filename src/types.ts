type PlaylistThumbnailStructure = {
  height: number;
  url: string;
  width: number;
};

export type PlaylistItemThumbnails = {
  default: PlaylistThumbnailStructure;
  high: PlaylistThumbnailStructure;
  medium: PlaylistThumbnailStructure;
  standard: PlaylistThumbnailStructure;
};

export type PlaylistItemSnippet = {
  channelId: string;
  channelTitle: string;
  description: string;
  playlistId: string;
  position: number;
  publishedAt: string;
  resourceId: {
    kind: string;
    videoId: string;
  };
  thumbnails: PlaylistItemThumbnails;
  title: string;
  videoOwnerChannelId: string;
  videoOwnerChannelTitle: string;
};

export type PlaylistItem = {
  etag: string;
  id: string;
  kind: string;
  snippet: PlaylistItemSnippet;
};

export interface Playlist {
  etag: string;
  items: PlaylistItem[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}
