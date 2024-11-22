import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  // private apiUrl = 'http://127.0.0.1:8000/runTest';
  private apiUrl = 'http://127.0.0.1:8000/api/fetch-output'
  private terminateUrl = 'http://localhost:8000/api/terminate-script/';
  private discoverUrl = 'http://localhost:8000/api/discoverTests';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  data = {
    "id": 7,
    "testCaseName": "TC2024007",
    "description": "Verify if Juniper Router supports 100000g Speed",
    "type": "Sanity",
    "testSteps": "Verify if Juniper Router supports 100g Speed",
    "createdBy": "Vinodh",
    "createdOn": "10/10/2024"
  }

  // runPostRequest(data: any): Observable<any> {
  runPostRequest(): Observable<any> {
    return this.http.post<any>(this.apiUrl, this.data, this.httpOptions);
  }

  fetchOutput(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  terminateScript(): Observable<any> {
    return this.http.post<any>(this.terminateUrl, {});
  }

  discoverTests(fileName: string) {
    return this.http.post(this.discoverUrl, { fileName: fileName });
  }
}
