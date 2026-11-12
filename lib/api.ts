export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4100/api';
export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const isFormData = init?.body instanceof FormData;
  const response = await fetch(`${API_URL}${path}`, { ...init, headers: { ...(!isFormData ? { 'Content-Type': 'application/json' } : {}), ...(init?.headers || {}) }, cache: 'no-store' });
  if (!response.ok) { const body = await response.json().catch(() => null); const message = body?.message; throw new Error(Array.isArray(message) ? message.join(', ') : message || `Erro ${response.status}`); }
  return response.json() as Promise<T>;
}
export type Country={code:string;name:string;region:'asia'|'europe';searchLabel:string};
export type Scan={id:string;keywords:string[];countryCodes:string[];pagesPerQuery:number;status:'running'|'paused'|'completed'|'failed';requestsUsed:number;resultsFound:number;newItems:number;processedQueries:number;error:string|null;createdAt:string};
export type Item={id:string;sourceNetwork:string;caption:string|null;creatorUsername:string|null;creatorName:string|null;creatorAvatarUrl:string|null;thumbnailUrl:string|null;sourcePermalink:string|null;sourceQuery:string;targetCountryCode:string;targetCountryName:string;targetRegion:'asia'|'europe'|'youtube';likeCount:number;commentCount:number;playCount:number;durationSeconds:number|null;workflowStatus:string;youtubeUrl:string|null;processingError:string|null;rightsConfirmed:boolean;hasLocalFile:boolean;downloadUrl:string|null;hasProcessedFile:boolean;previewUrl:string|null;narrationScript:string|null;narrationVoice:string|null;captionsBurned:boolean;processedKind:'edited'|'narrated'|'youtube_cut'|null;editStartSeconds:number|null;editEndSeconds:number|null;audioMode:'original'|'mute'|'narration'|null;outputFormat:'original'|'vertical'|null;processedAt:string|null;createdAt:string};
export type Stats={total:number;potentialViews:number;byStatus:Record<string,number>;byRegion:Record<string,number>};
export type YoutubeStatus={configured:boolean;connected:boolean;updatedAt:string|null};
export type CutCandidate={id:string;startSeconds:number;endSeconds:number;title:string;hook:string;reason:string;score:number;mediaItemId:string|null;previewUrl:string|null};
export type CutProject={id:string;title:string;sourceUrl:string|null;durationSeconds:number;status:'analyzing'|'completed'|'failed';requestedClips:number;minSeconds:number;maxSeconds:number;error:string|null;createdAt:string;candidates:CutCandidate[]};
