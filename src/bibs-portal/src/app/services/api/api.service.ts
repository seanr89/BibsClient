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

    //Used to get data from the API.
    /*async get<T>(
        url: string,
        responseType: any = null
    ): Promise<HttpResponse<T>> {
        //this.appInsights.logTrace(`API Get : ${url}`);
        if (responseType !== null) {
            return this.http
                .get<T>(`${environment.ApiConfig.url}/${url}`, {
                    responseType: responseType as 'json',
                    headers: new HttpHeaders().set(
                        'Strict-Transport-Security',
                        'max-age=31536000; includeSubDomains'
                    ),
                    observe: 'response'
                })
                .pipe()
                .toPromise();
        } else {
            return this.http
                .get<T>(`${environment.ApiConfig.url}/${url}`, {
                    headers: new HttpHeaders().set(
                        'Strict-Transport-Security',
                        'max-age=31536000; includeSubDomains'
                    ),
                    observe: 'response'
                })
                .pipe()
                .toPromise();
        }
    }

    //Used to pass data to the API to be inserted into the database. Replace used on json to from _ when handling private variables.
    async put<T>(url: string, body: Object = {}): Promise<any> {
        return this.http
            .put(`${environment.ApiConfig.url}/${url}`, JSON.stringify(body), {
                observe: 'response'
            })
            .pipe()
            .toPromise();
    }
    */
}