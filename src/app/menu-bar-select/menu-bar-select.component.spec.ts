import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarSelectComponent } from './menu-bar-select.component';

describe('MenuBarSelectComponent', () => {
  let component: MenuBarSelectComponent;
  let fixture: ComponentFixture<MenuBarSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
