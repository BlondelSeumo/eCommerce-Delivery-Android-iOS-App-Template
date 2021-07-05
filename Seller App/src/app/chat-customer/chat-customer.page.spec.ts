import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatCustomerPage } from './chat-customer.page';

describe('ChatCustomerPage', () => {
  let component: ChatCustomerPage;
  let fixture: ComponentFixture<ChatCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
