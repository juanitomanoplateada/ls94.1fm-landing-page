import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Live } from './live';

describe('Live', () => {
  let component: Live;
  let fixture: ComponentFixture<Live>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Live]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Live);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
