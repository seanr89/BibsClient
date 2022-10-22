import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePlayerAddComponent } from './simple-player-add.component';

describe('SimplePlayerAddComponent', () => {
  let component: SimplePlayerAddComponent;
  let fixture: ComponentFixture<SimplePlayerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePlayerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePlayerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
