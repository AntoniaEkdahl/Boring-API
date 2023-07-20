import { Component, OnInit } from '@angular/core'; // import OnInit so we implement OnInit on our class.

import { BooringService } from '../booring.service'; // import our BooringService so we can use it here.
import { BoringApiResponse } from '../BoredApiResponse'; // import our BoredApiResponse so we can use it here.

@Component({
  selector: 'app-random-activity',
  templateUrl: './random-activity.component.html',
  styleUrls: ['./random-activity.component.css'],
})
export class RandomActivityComponent implements OnInit {
  // implement OnInit so we can use ngOnInit

  theActivity: BoringApiResponse = { activity: '' }; // Declare that theActivity will be a type of BoringApiResponses and have to specify the object.
  constructor(private _boringApiService: BooringService) {} //  Inject  BooringService,  "dependency injection", so we can use observables with _boringApiService.

  ngOnInit(): void {
    // A method that will return an observable that we subscribe to and put the response in to 'theActivity'
    this._boringApiService.getActivity().subscribe((data) => {
      this.theActivity = data;
    });
  }

  onBtnClick() {
    // A method for when the user press the button ngOnInit() will run with a new random activity.
    this.ngOnInit();
  }
}
