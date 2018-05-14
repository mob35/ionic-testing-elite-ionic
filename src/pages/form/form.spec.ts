import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormPage } from './form';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { By } from "@angular/platform-browser";

describe('Form Page', () => {

    let de: DebugElement;
    let comp: FormPage;
    let fixture: ComponentFixture<FormPage>;
    let username: HTMLInputElement;
    let password: HTMLInputElement;
    let btnLogin: HTMLInputElement;
    let formUsername;
    let formPassword;
    // let btnLogin;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [FormPage],
            imports: [
                IonicModule.forRoot(FormPage)
            ],
            providers: [
                { provide: DeepLinker, useClass: DeepLinkerMock },
                { provide: NavController, useClass: NavMock }
            ]
        });

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormPage);
        comp = fixture.componentInstance;
    });
    it('should be initial home page show form input (formControlName="username" type="text")', () => {
        formUsername = fixture.debugElement.query(By.css('[formControlName="username"][type="text"]')).nativeElement;
        expect(formUsername).not.toBeNull();
    });

    it('should be initial home page show form input (formControlName="password" type="password")', () => {
        formPassword = fixture.debugElement.query(By.css('[formControlName="password"][type="password"]')).nativeElement;
        expect(formPassword).not.toBeNull();
    });

    it('should be initial home page show button (class="btn-login")', () => {
        btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
        expect(btnLogin).not.toBeNull();
    });

    it('should be fill input have username and without password button is disabled (true)', async(() => {
        btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
        comp.username.setValue('username');
        fixture.detectChanges();
        expect(comp.username.value).toEqual('username');
        expect(comp.password.value).toEqual('');
        expect(btnLogin.disabled).toBe(true);
    }));

    it('should be fill input without username and have password button is disabled (true)', async(() => {
        btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
        comp.password.setValue('password');
        fixture.detectChanges();
        expect(comp.username.value).toEqual('');
        expect(comp.password.value).toEqual('password');
        expect(btnLogin.disabled).toBe(true);
    }));

    it('should be fill input username and password button is disabled (false)', async(() => {
        btnLogin = fixture.debugElement.query(By.css('.btn-login')).nativeElement;
        comp.username.setValue('username');
        comp.password.setValue('password');
        fixture.detectChanges();
        expect(comp.username.value).toEqual('username');
        expect(comp.password.value).toEqual('password');
        expect(btnLogin.disabled).toBe(false);
    }));
});