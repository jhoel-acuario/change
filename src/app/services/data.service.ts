import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  Api = environment.API;

  getData():Observable<any>{
    return this.http.get<any>(this.Api);
  }
  setLocalStorage(data: any){
    localStorage.setItem('Data', data)
  }
}
