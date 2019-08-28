import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIpoDetailsComponent } from './list-ipo-details.component';

describe('ListIpoDetailsComponent', () => {
  let component: ListIpoDetailsComponent;
  let fixture: ComponentFixture<ListIpoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIpoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIpoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
