import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatWithCustomerPage } from './chat-with-customer.page';

describe('ChatWithCustomerPage', () => {
  let component: ChatWithCustomerPage;
  let fixture: ComponentFixture<ChatWithCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithCustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWithCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
