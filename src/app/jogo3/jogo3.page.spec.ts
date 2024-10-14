import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jogo3Page } from './jogo3.page';

describe('Jogo3Page', () => {
  let component: Jogo3Page;
  let fixture: ComponentFixture<Jogo3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jogo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
