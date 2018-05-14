import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from '@angular/platform-browser';

describe('Home Page', () => {

  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let title: DebugElement;
  let el: HTMLElement;
  let dataUser: HTMLInputElement;
  let dataPassword: HTMLInputElement;
  let loginBtn: HTMLButtonElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock }
      ]
    });

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    loginBtn = fixture.debugElement.query(By.css('.loginButton')).nativeElement;
    dataUser = fixture.debugElement.query(By.css('.username')).nativeElement;
    dataPassword = fixture.debugElement.query(By.css('.password')).nativeElement;

  });

  // afterEach(() => {
  //   fixture.destroy();
  //   comp = null;
  //   de = null;
  //   el = null;
  // });

  it('is created', () => {

    expect(fixture).toBeTruthy();
    expect(comp).toBeTruthy();

  });

  it('initialises with a title of My Page', () => {
    expect(comp['title']).toEqual('My Page');
    expect(comp instanceof HomePage).toBe(true);
  });

  it('can set the title to a supplied value', () => {
    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;
    comp.changeTitle('Your Page');
    fixture.detectChanges();
    expect(comp['title']).toEqual('Your Page'); // 
    expect(el.textContent).toContain('Your Page');
  });

  it('input username', () => {
    let data = { user: 'user' };
    de = fixture.debugElement.query(By.css('.username'));
    el = de.nativeElement;
    el.textContent = data.user;
    expect(el.textContent).toContain('user');
  });

  it('input password', () => {
    let data = {
      user: 'user',
      password: 'password'
    };
    de = fixture.debugElement.query(By.css('.password'));
    el = de.nativeElement;
    el.textContent = data.password;
    expect(el.textContent).toContain('password');
  });

  it('should check loginBtn is disabled initially', () => {
    fixture.detectChanges();
    // fixture.whenStable().then(() => {
    expect(comp.data.user).toBe('')
    expect(comp.data.password).toBe('')
    expect(loginBtn.disabled).toBe(true);
    // })
  });

  it('should be fill input username and password to button enable', () => {
    fixture.detectChanges();
    // fixture.whenStable().then(() => {
    dataUser.value = 'user01 test';
    // dataUser.dispatchEvent(new Event('input'));
    dataPassword.value = 'password1234 test';
    // dataPassword.dispatchEvent(new Event('input'));
    comp.data.user = dataUser.value;
    comp.data.password = dataPassword.value;
    fixture.detectChanges();
    expect(dataUser.value).toBe(dataUser.value);
    expect(dataPassword.value).toBe(dataPassword.value);
    expect(comp.data.user).toBe(dataUser.value);
    expect(comp.data.password).toBe(dataPassword.value);
    expect(loginBtn.disabled).toBe(false);
    // });
  });
});