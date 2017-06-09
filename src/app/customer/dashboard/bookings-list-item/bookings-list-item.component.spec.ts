import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsListItemComponent } from './bookings-list-item.component';

describe('BookingsListItemComponent', () => {
  let component: BookingsListItemComponent;
  let fixture: ComponentFixture<BookingsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
