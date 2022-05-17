import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarSelfcreatedComponent } from './menu-bar-selfcreated.component';

describe('MenuBarSelfcreatedComponent', () => {
  let component: MenuBarSelfcreatedComponent;
  let fixture: ComponentFixture<MenuBarSelfcreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarSelfcreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarSelfcreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
