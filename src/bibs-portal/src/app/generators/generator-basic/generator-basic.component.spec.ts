import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorBasicComponent } from './generator-basic.component';

describe('GeneratorBasicComponent', () => {
  let component: GeneratorBasicComponent;
  let fixture: ComponentFixture<GeneratorBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratorBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
