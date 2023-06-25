import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcommentComponent } from './popupcomment.component';

describe('PopupcommentComponent', () => {
  let component: PopupcommentComponent;
  let fixture: ComponentFixture<PopupcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupcommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
