import { Component, OnDestroy, OnInit } from '@angular/core';
import { NasaImageService } from '../shared/services/nasa-image.service';
import { debounceTime, distinctUntilChanged, Subject, Subscription, switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { NasaImage } from '../shared/models/nasa.model';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss']
})
export class PictureListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  nasaImage?: NasaImage | null;
  nasaImage$ = new Subject<HttpParams>();
  searchText = '';
  isLoading = false;

  constructor(private nasaImageService: NasaImageService) {
  }

  ngOnInit() {
    this.subscriptionSearch();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  subscriptionSearch(): void {
    this.subscription.add(
      this.nasaImage$
        .pipe(
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(params => this.nasaImageService.onGetSearchImage(params))
        )
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.nasaImage = response;
          },
          error: (err) => {
            this.isLoading = false;
            console.error(err);
          },
        })
    );
  }

  onSearch() {
    this.isLoading = true;
    this.nasaImage = null;
    const params_object = {
      q: this.searchText
    };
    const params = new HttpParams({ fromObject:  params_object})
    this.nasaImage$.next(params);
  }
}
