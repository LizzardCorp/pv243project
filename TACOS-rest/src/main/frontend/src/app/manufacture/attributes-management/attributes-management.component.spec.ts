import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesManagementComponent } from './attributes-management.component';

describe('AttributesManagementComponent', () => {
  let component: AttributesManagementComponent;
  let fixture: ComponentFixture<AttributesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
