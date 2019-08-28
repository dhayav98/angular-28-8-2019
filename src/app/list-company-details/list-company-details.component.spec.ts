import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyDetailsComponent } from './list-company-details.component';

describe('ListCompanyDetailsComponent', () => {
  let component: ListCompanyDetailsComponent;
  let fixture: ComponentFixture<ListCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
