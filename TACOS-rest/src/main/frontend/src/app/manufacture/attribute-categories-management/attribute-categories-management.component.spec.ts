import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeCategoriesManagementComponent } from './attribute-categories-management.component';

describe('AttributeCategoriesManagementComponent', () => {
  let component: AttributeCategoriesManagementComponent;
  let fixture: ComponentFixture<AttributeCategoriesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeCategoriesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeCategoriesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
