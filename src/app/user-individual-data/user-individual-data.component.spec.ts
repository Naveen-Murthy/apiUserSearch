import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndividualDataComponent } from './user-individual-data.component';

describe('UserIndividualDataComponent', () => {
  let component: UserIndividualDataComponent;
  let fixture: ComponentFixture<UserIndividualDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndividualDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIndividualDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
