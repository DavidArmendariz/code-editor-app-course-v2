export interface UserFile {
  id: string;
  name: string;
  relativePath: string;
  code: string;
  extension: string;
}

export interface FileViewerStructure {
  id: string;
  name: string;
  children?: FileViewerStructure[];
  extension?: string;
}
