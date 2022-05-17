import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarAddComponent } from './menu-bar-add.component';

describe('MenuBarAddComponent', () => {
  let component: MenuBarAddComponent;
  let fixture: ComponentFixture<MenuBarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
