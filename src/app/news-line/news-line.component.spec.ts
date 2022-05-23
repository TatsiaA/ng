import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLineComponent } from './news-line.component';

describe('NewsLineComponent', () => {
  let component: NewsLineComponent;
  let fixture: ComponentFixture<NewsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
