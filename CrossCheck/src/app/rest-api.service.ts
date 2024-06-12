import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private apiUrl = 'http://127.0.0.1:8000/getTestCases'; 
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // postBlog(blog: any) {
  //   const url = 'http://localhost:3000/blogs'; // Replace with your API endpoint
  //   return this.http.post(url, blog, this.httpOptions);
  // }
  getAllData(){
    return this.http.get(`${this.apiUrl}`);
    return this.http.get(this.apiUrl, this.httpOptions)
  }


}
