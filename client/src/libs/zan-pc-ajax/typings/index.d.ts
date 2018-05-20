import { CancelToken, CancelTokenStatic } from 'axios';
import { RequestOptionsWithoutUrl, RequestOptions } from 'zan-ajax';

interface PcRequestOptions extends RequestOptions {
  rawResponse?: boolean;
}

interface PcRequestOptionsWithoutUrl extends RequestOptionsWithoutUrl {
  rawResponse?: boolean;
}

declare function ajax<T = any>(
  url: string,
  options?: PcRequestOptionsWithoutUrl
): Promise<T>;
declare function ajax<T = any>(options: PcRequestOptions): Promise<T>;

declare namespace ajax {
  export const CancelToken: CancelTokenStatic;
  export function isCancel(value: any): boolean;
}

export default ajax;
