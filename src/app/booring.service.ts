import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient so we can use it in the service

import { BoringApiResponse } from './BoredApiResponse'; // import the type we created so it can be used in the service.

@Injectable({
  providedIn: 'root',
})
export class BooringService {
  constructor(private _http: HttpClient) {} // Inject HttpClient,  "dependency injection", so we can use observables with _http.

  getActivity() {
    // Method with fetch using the HttpClient.get() and returns an Observable<BoringApiResponse>
    return this._http.get<BoringApiResponse>(
      'https://www.boredapi.com/api/activity/'
    );
  }
}
