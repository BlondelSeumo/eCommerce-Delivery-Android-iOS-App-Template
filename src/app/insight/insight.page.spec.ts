import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsightPage } from './insight.page';

describe('InsightPage', () => {
  let component: InsightPage;
  let fixture: ComponentFixture<InsightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
