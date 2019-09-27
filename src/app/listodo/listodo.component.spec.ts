import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListodoComponent } from './listodo.component';

describe('ListodoComponent', () => {
  let component: ListodoComponent;
  let fixture: ComponentFixture<ListodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
