export interface ItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: Thumbnail;
}

interface channelStatistics {
  statistics?: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
}
interface videoStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface Thumbnail {
  default: {
    url: string;
    width?: number;
    height?: number;
  };
  medium?: {
    url: string;
    width?: number;
    height?: number;
  };
  high?: {
    url: string;
    width?: number;
    height?: number;
  };
}

export interface VideoItem extends channelStatistics {
  kind: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
  };
  snippet: ItemSnippet;
}

export interface APIResponseSearch {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoItem[] | videoDetailType[] | channelDetail[] | VideoComment[];
}

export interface channelDetail extends channelStatistics {
  kind: string;
  id:
    | string
    | {
        kind: string;
        videoId?: string;
        channelId?: string;
      };
  snippet: ItemSnippet;
}

export interface VideoDetailType {
  kind: string;
  id: string;
  snippet: ItemSnippet;
  statistics: videoStatistics;
}

export interface CommentSnippet {
  videoId: string;
  channelId: string;
  topLevelComment: Comment;
}

export interface Comment {
  kind: string;
  id: string;
  snippet: {
    videoId: string;
    channelId: string;
    textDisplay: string;
    textOriginal: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    authorChannelId?: {
      value: string;
    };
    authorChannelUrl: string;
    likeCount: string;
    publishedAt: string;
  };
}

export interface VideoComment {
  kind: string;
  id: string;
  snippet: CommentSnippet;
}

export type UrlParams = {
  id: string;
};
