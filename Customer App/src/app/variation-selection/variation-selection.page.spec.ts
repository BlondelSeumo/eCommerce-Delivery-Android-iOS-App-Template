import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariationSelectionPage } from './variation-selection.page';

describe('VariationSelectionPage', () => {
  let component: VariationSelectionPage;
  let fixture: ComponentFixture<VariationSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariationSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
