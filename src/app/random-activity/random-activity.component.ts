import { Component, OnInit } from '@angular/core';

import { BooringService } from '../booring.service';
import { BoringApiResponse } from '../BoredApiResponse';

@Component({
  selector: 'app-random-activity',
  templateUrl: './random-activity.component.html',
  styleUrls: ['./random-activity.component.css'],
})
export class RandomActivityComponent implements OnInit {
  theActivity: BoringApiResponse = { activity: '' };

  constructor(private _boringApiService: BooringService) {}

  ngOnInit(): void {
    this._boringApiService.getActivity().subscribe((data) => {
      this.theActivity = data;
    });
  }

  onBtnClick() {
   this.ngOnInit();
  }
}
