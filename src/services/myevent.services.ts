import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6

@Injectable({
    providedIn: 'root'
})
export class MyEvent {
    private selectedLanguage = new Subject<string>();

    constructor() { }

    public getLanguageObservable(): Observable<string> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data) {
        this.selectedLanguage.next(data);
    }
}