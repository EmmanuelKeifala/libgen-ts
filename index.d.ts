// index.d.ts

// Available mirrors information (replace with actual structure if different)
interface MirrorInfo {
  baseUrl: string;
  canDownloadDirect: boolean; // Optional property if not all mirrors support direct download
}

declare namespace available_mirrors {
  export const mirrors: MirrorInfo[];
}

// Clean module
declare module './clean.js' {
  export function forFields(
    json: any,
    fields: string | string[] | {[key: string]: any},
  ): any[];
  export function dups(array: any[]): any[];
}

// Latest module
declare module './latest.js' {
  export function id(mirror: string): Promise<string | Error>;
  export function text(mirror: string): Promise<any | Error>;
}

// Random module
declare module './random.js' {
  export interface RandomOptions {
    mirror: string;
    count?: number;
    fields?: string | string[];
  }
  export function text(options: RandomOptions): Promise<any[] | Error>;
}

// Search module
declare module './search.js' {
  export interface SearchOptions {
    mirror: string;
    query: string;
    count?: number;
    offset?: number | string;
    sort_by?: string;
    search_in?: string;
    reverse?: boolean;
  }
  export function search(options: SearchOptions): Promise<any[] | Error>;
}

// Speed module
declare module './speed.js' {
  export function mirror(): Promise<string | Error>;
  export function canDownload(
    text: string | {md5?: string},
  ): Promise<string | Error>;
}

// Export all modules
export * as clean from './clean.js';
export * as latest from './latest.js';
export * as random from './random.js';
export * as search from './search.js';
export * as speed from './speed.js';
export {mirror} from './speed.js';
export * as available_mirrors from './available_mirrors.js';
