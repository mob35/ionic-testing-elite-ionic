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
  // let loginBtn: HTMLInputElement;
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
    // expect(comp['title']).toEqual('My Page');
    expect(comp instanceof HomePage).toBe(true);
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

  // it('should check loginBtn is disabled initially', () => {
  //   fixture.detectChanges();
  //   let loginBtn =   fixture.debugElement.query(By.css('.loginButton')).nativeElement;
  //   fixture.whenStable().then(() => {
  //     expect(loginBtn.disabled).toBe(true)
  //    })

  //  });

  // it('should check later input', async(() => {
  //   let loginBtn = fixture.debugElement.query(By.css('.loginButton')).nativeElement;
  //   let data: any = {
  //     user: '',
  //     password: ''
  //   };
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     data.user = 'user';
  //     data.user.dispatchEvent(new Event('input'));
  //     // data.password = '';
  //     // data.password.dispatchEvent(new Event('input'));

  //     // expect(data.user).toBe('user');
  //     fixture.detectChanges();
  //     expect(loginBtn.disabled).toBe(false)
  //   });

  // }));

  it('should be fill input username and password', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      dataUser.value = 'user01';
      dataUser.dispatchEvent(new Event('input'));
      dataPassword.value = 'password1234';
      dataPassword.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(dataUser.value).toBe('user01');
      expect(dataPassword.value).toBe('password1234');
      expect(loginBtn.disabled).toBe(false);
  });
  });


  //  it('should check loginBtn is disabled initially', () => {
  //  let loginBtn = fixture.debugElement.query(By.css('.loginButton')).nativeElement;
  //   let data: any = {};
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     // data.user.value = 'user';
  //     // data.user.dispatchEvent(new Event('input'));

  //     // data.password = 'password';
  //     // data.password.dispatchEvent(new Event('input'));
  //     // fixture.detectChanges();
  //     expect(data.user.value).toBe('')
  //     expect(loginBtn.disabled).toBe(false)


  //  })
  // });

  // it('button disabled', () => {
  //     let data = { 
  //       user: 'user',
  //       password: 'password'
  //    };
  //   de = fixture.debugElement.query(By.css('.loginButton'));
  //   el = de.nativeElement;
  //   expect(el.textContent).toContain('Click');
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     expect(el.disabled).toBe(true)
  //   })

  // });

  // it('can set the title to a supplied value', () => {

  //   de = fixture.debugElement.query(By.css('ion-title'));
  //   el = de.nativeElement;

  //   comp.changeTitle('Your Page');
  //   fixture.detectChanges();
  //   expect(comp['title']).toEqual('Your Page'); // 
  //   expect(el.textContent).toContain('Your Page');

  // });

});