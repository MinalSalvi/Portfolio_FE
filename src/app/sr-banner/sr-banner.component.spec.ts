import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRBannerComponent } from './sr-banner.component';

describe('SRBannerComponent', () => {
  let component: SRBannerComponent;
  let fixture: ComponentFixture<SRBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SRBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
