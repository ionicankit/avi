import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticolumnsliderComponent } from './multicolumnslider.component';

describe('MulticolumnsliderComponent', () => {
  let component: MulticolumnsliderComponent;
  let fixture: ComponentFixture<MulticolumnsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticolumnsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticolumnsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
