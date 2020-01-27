import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjoblistComponent } from './addjoblist.component';

describe('AddjoblistComponent', () => {
  let component: AddjoblistComponent;
  let fixture: ComponentFixture<AddjoblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjoblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
