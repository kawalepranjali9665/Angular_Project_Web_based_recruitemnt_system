import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedjobComponent } from './searchedjob.component';

describe('SearchedjobComponent', () => {
  let component: SearchedjobComponent;
  let fixture: ComponentFixture<SearchedjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
