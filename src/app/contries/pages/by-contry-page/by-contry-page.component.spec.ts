import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByContryPageComponent } from './by-contry-page.component';

describe('ByContryPageComponent', () => {
  let component: ByContryPageComponent;
  let fixture: ComponentFixture<ByContryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByContryPageComponent]
    });
    fixture = TestBed.createComponent(ByContryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
