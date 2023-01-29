import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {}

    async post<T>(url: string, body: Object = {}){
        //console.log(`post url ${this.apiServer}${url} with panel: ${body}`);
        return this.http
            .post<T>(
                `${environment.ApiConfig.url}/${url}`,
                JSON.stringify(body),
                {
                    headers: new HttpHeaders()
                        .set('Content-Type', 'application/json')
                        .append(
                            'Strict-Transport-Security',
                            'max-age=31536000; includeSubDomains'
                        ),
                    observe: 'response'
                }
            ).subscribe((data) => {
        });
    }
}