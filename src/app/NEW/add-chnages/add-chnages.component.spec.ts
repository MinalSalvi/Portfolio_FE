import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChnagesComponent } from './add-chnages.component';

describe('AddChnagesComponent', () => {
  let component: AddChnagesComponent;
  let fixture: ComponentFixture<AddChnagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChnagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChnagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
