import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryIdComponent } from './query-id.component';

describe('QueryIdComponent', () => {
  let component: QueryIdComponent;
  let fixture: ComponentFixture<QueryIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
