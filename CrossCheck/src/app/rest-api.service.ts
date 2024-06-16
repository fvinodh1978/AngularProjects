import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // private apiUrl = '/getTestCases'; 
  // private apiUrl = 'http://127.0.0.1:8000/getTestCases'; 
  private apiUrl = 'http://127.0.0.1:8000/runTest'; 

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // postBlog(blog: any) {
  //   const url = 'http://localhost:3000/blogs'; // Replace with your API endpoint
  //   return this.http.post(url, blog, this.httpOptions);
  // }
  // getAllData(){
  //   return this.http.get(`${this.apiUrl}`);
  //   return this.http.get(this.apiUrl, this.httpOptions)
  // }

  data={
    "testCaseName": "TC2024001",
    "description": "Verify if Juniper Router supports 10g Speed",
    "type": "Sanity"
  }

  // runPostRequest(data: any): Observable<any> {
    runPostRequest(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.data, this.httpOptions);
  }

}
