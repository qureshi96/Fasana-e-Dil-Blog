import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentslistComponent } from './commentslist.component';

describe('CommentslistComponent', () => {
  let component: CommentslistComponent;
  let fixture: ComponentFixture<CommentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
