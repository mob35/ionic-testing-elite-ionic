import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LoginPage } from './login';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from "@angular/platform-browser";

describe('Login Page', () => {

    let de: DebugElement;
    let comp: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let username: HTMLInputElement;
    let password: HTMLInputElement;
    let btnLogin: HTMLInputElement;


    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [
                IonicModule.forRoot(LoginPage)
            ],
            providers: [
                { provide: DeepLinker, useClass: DeepLinkerMock },
                { provide: NavController, useClass: NavMock }
            ]
        });

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        comp = fixture.componentInstance;
        username = fixture.debugElement.query(By.css('.username')).nativeElement;
        password = fixture.debugElement.query(By.css('.password')).nativeElement;
        btnLogin = fixture.debugElement.query(By.css('.btnLogin')).nativeElement;
    });

    it('should be create login component', () => {
        expect(comp instanceof LoginPage).toBe(true);
    });

    it('should be init input username to empty', () => {
        fixture.detectChanges();
        expect(username.value).toBe('');
    });

    it('should be init input password to empty', () => {
        fixture.detectChanges();
        expect(password.value).toBe('');
    });

    it('should be init disable button login', () => {
        fixture.detectChanges();
        expect(btnLogin.disabled).toBe(true);
    });

    it('should be fill input username', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            username.value = 'user01';
            username.dispatchEvent(new Event('change'));
            expect(username.value).toBe('user01');
            expect(btnLogin.disabled).toBe(true);
        });
    });

    it('should be fill input password', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            password.value = 'password1234';
            password.dispatchEvent(new Event('change'));
            expect(password.value).toBe('password1234');
            expect(btnLogin.disabled).toBe(true);
        });
    });

    it('should be fill input username and password', () => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            username.value = 'user01';
            username.dispatchEvent(new Event('input'));
            password.value = 'password1234';
            password.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(username.value).toBe('user01');
            expect(password.value).toBe('password1234');
            expect(btnLogin.disabled).toBe(false);
        });
    });

});