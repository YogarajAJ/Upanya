import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksreviewComponent } from './booksreview.component';

describe('BooksreviewComponent', () => {
  let component: BooksreviewComponent;
  let fixture: ComponentFixture<BooksreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
