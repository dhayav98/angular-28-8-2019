import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIpoDetailsComponent } from './user-ipo-details.component';

describe('UserIpoDetailsComponent', () => {
  let component: UserIpoDetailsComponent;
  let fixture: ComponentFixture<UserIpoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIpoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIpoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
