import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReserachComponent } from './new-reserach.component';

describe('NewReserachComponent', () => {
  let component: NewReserachComponent;
  let fixture: ComponentFixture<NewReserachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReserachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReserachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
