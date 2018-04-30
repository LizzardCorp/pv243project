import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactureHeaderComponent } from './manufacture-header.component';

describe('ManufactureHeaderComponent', () => {
  let component: ManufactureHeaderComponent;
  let fixture: ComponentFixture<ManufactureHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactureHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
