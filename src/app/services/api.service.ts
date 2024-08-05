import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = ' http://www.omdbapi.com/?i=tt3896198&apikey=37444360'; // Example public API
  private apiUrl = ' http://www.omdbapi.com/?apikey=37444360&'; // Example public API
  constructor(private http: HttpClient) {}

  getData(title: any, year: any): Observable<any> {
    return this.http.get(this.apiUrl + 't=' + title + '&y=' + year);
  }
}
