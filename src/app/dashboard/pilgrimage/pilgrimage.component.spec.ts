import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilgrimageComponent } from './pilgrimage.component';

describe('PilgrimageComponent', () => {
  let component: PilgrimageComponent;
  let fixture: ComponentFixture<PilgrimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilgrimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilgrimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
