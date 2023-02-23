import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPictureComponent } from './daily-picture.component';

describe('DailyPictureComponent', () => {
  let component: DailyPictureComponent;
  let fixture: ComponentFixture<DailyPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
