import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileItem } from './file.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileExplorerService {

  private apiUrl = 'http://localhost:8000/api/getFiles';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getFiles(dirPath: string = '/'): Observable<FileItem[]> {
    return this.http.get<FileItem[]>(`${this.apiUrl}?dirPath=${dirPath}`).pipe(
      map(files => this.addCheckedProperty(files))
    );
  }

  private addCheckedProperty(files: FileItem[]): FileItem[] {
    return files.map(file => ({
      ...file,
      checked: false,  // Initialize checked property
      children: file.children ? this.addCheckedProperty(file.children) : []
    }));
  }

  getRootDirectory(): Observable<FileItem[]> {
    return this.getFiles('/').pipe(
      map(files => [{
        name: 'tests',
        type: 'directory',
        path: '/',
        checked: false,
        children: files
      }])
    );
  }
  // Example method to get files
  getFiles1(): FileItem[] {
    return [
      {
        name: 'Documents',
        type: 'directory',
        path: 'documents',
        children: [
          { name: 'resume.pdf', type: 'file', path: 'abc' },
          { name: 'cover_letter.docx', type: 'file', path: 'abc' }
        ]
      },
      {
        name: 'Photos',
        type: 'directory',
        path: 'abc',
        children: [
          { name: 'vacation.jpg', type: 'file', path: 'abc' },
          { name: 'birthday.png', type: 'file', path: 'abc' }
        ]
      }
    ];
  }
}

