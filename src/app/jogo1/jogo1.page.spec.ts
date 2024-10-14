import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jogo1Page } from './jogo1.page';

describe('Jogo1Page', () => {
  let component: Jogo1Page;
  let fixture: ComponentFixture<Jogo1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jogo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
