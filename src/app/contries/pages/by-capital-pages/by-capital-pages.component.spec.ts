import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalPagesComponent } from './by-capital-pages.component';

describe('ByCapitalPagesComponent', () => {
  let component: ByCapitalPagesComponent;
  let fixture: ComponentFixture<ByCapitalPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCapitalPagesComponent]
    });
    fixture = TestBed.createComponent(ByCapitalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
