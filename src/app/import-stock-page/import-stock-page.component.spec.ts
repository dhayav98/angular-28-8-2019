import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStockPageComponent } from './import-stock-page.component';

describe('ImportStockPageComponent', () => {
  let component: ImportStockPageComponent;
  let fixture: ComponentFixture<ImportStockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportStockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportStockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
