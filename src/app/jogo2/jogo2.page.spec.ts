import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Jogo2Page } from './jogo2.page';

describe('Jogo2Page', () => {
  let component: Jogo2Page;
  let fixture: ComponentFixture<Jogo2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Jogo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
