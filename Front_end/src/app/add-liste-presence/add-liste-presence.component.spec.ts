import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListePresenceComponent } from './add-liste-presence.component';

describe('AddListePresenceComponent', () => {
  let component: AddListePresenceComponent;
  let fixture: ComponentFixture<AddListePresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListePresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListePresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
