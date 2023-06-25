import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupreactionComponent } from './popupreaction.component';

describe('PopupreactionComponent', () => {
  let component: PopupreactionComponent;
  let fixture: ComponentFixture<PopupreactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupreactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupreactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
