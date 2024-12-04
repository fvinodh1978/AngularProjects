export interface FileItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: FileItem[];
  checked?: boolean;  // Add the checked property
}
