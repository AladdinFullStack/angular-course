import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaggerFormFieldComponent } from './tagger-form-field.component';

describe('TaggerFormFieldComponent', () => {
  let component: TaggerFormFieldComponent;
  let fixture: ComponentFixture<TaggerFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaggerFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaggerFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
