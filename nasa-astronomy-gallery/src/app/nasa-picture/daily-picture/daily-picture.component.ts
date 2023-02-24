import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyPictureService } from '../shared/services/daily-picture.service';
import { DailyPicture } from '../shared/models/nasa.model';
import { HttpErrorResponse } from '@angular/common/http';
import { retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-daily-picture',
  templateUrl: './daily-picture.component.html',
  styleUrls: ['./daily-picture.component.scss']
})
export class DailyPictureComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;

  dailyPicture?: DailyPicture
  isLoading = true;
  showAlert = false;
  httpErrorResponse?: HttpErrorResponse

  constructor(private dailyPictureService: DailyPictureService) {
  }

  ngOnInit() {
    this.getDailyPicture();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getDailyPicture(): void {
    this.subscription = this.dailyPictureService.onGetDailyPicture()
      .pipe(retry(2))
      .subscribe(
        response => {
          this.showAlert = false;
          this.dailyPicture = response;
        }, error => {
          this.httpErrorResponse = error
          this.showAlert = true;
        }
      )
  }

  retry(): void {
    this.getDailyPicture();
  }
}
