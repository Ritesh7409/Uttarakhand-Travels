import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildLifeComponent } from './wild-life.component';

describe('WildLifeComponent', () => {
  let component: WildLifeComponent;
  let fixture: ComponentFixture<WildLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
