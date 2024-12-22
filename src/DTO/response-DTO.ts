export interface ResponseDTO<content> {
  success: boolean;
  app: string;
  author: string;
  timestamp: Date;
  version: string;
  method: string;
  protocol: string;
  hostname: string;
  url: string;
  content: content;
}
