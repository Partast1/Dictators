import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictatorDetailComponent } from './dictator-detail.component';

describe('DictatorDetailComponent', () => {
  let component: DictatorDetailComponent;
  let fixture: ComponentFixture<DictatorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictatorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictatorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
