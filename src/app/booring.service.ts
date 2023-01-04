import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BoringApiResponse } from './BoredApiResponse';

@Injectable({
  providedIn: 'root'
})
export class BooringService {

  constructor(private _http: HttpClient) { }

  getActivity(){
    return this._http.get<BoringApiResponse>('https://www.boredapi.com/api/activity/');
  }
}
