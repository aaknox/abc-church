import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinServicesComponent } from './min-services.component';

describe('MinServicesComponent', () => {
  let component: MinServicesComponent;
  let fixture: ComponentFixture<MinServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinServicesComponent]
    });
    fixture = TestBed.createComponent(MinServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
