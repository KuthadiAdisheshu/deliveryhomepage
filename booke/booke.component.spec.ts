import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeComponent } from './booke.component';

describe('BookeComponent', () => {
  let component: BookeComponent;
  let fixture: ComponentFixture<BookeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
