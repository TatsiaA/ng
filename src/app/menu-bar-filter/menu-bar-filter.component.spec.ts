import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarFilterComponent } from './menu-bar-filter.component';

describe('MenuBarFilterComponent', () => {
  let component: MenuBarFilterComponent;
  let fixture: ComponentFixture<MenuBarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
