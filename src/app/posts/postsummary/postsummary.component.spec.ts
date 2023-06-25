import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsummaryComponent } from './postsummary.component';

describe('PostsummaryComponent', () => {
  let component: PostsummaryComponent;
  let fixture: ComponentFixture<PostsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
