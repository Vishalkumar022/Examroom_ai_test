import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtertabs } from './filtertabs';

describe('Filtertabs', () => {
  let component: Filtertabs;
  let fixture: ComponentFixture<Filtertabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filtertabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filtertabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
