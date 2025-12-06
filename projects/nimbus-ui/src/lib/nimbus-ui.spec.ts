import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimbusUi } from './nimbus-ui';

describe('NimbusUi', () => {
  let component: NimbusUi;
  let fixture: ComponentFixture<NimbusUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NimbusUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NimbusUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
