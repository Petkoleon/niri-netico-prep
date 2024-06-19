import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {getCustomHeaders, getDefaultHeaders, getQueryParameters} from '@api/client/client-wrapper-common';
import {KeyValueObject} from '@interfaces/key-value-object.interface';
import {Observable} from 'rxjs';
import {environment} from "@environments/environment";

@Injectable({providedIn: 'root'})
export class HttpClientWrapper {
	constructor(private httpClient: HttpClient) {}

	executeGET<T>(path: string, options?: any): Observable<T> {
		return this.httpClient.get<T>(`${environment.apiBasePath}${path}`, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
			responseType: 'json',
		});
	}

	executeGETBlob(path: string, options?: string): Observable<HttpResponse<Blob>> {
		return this.httpClient.get<Blob>(`${environment.apiBasePath}${path}`, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
			observe: 'response',
			responseType: 'blob' as 'json'
		});
	}

	executeGETCrossOrigin<T>(fullPath: string, headers: KeyValueObject<string>, options?: any): Observable<T> {
		return this.httpClient.get<T>(fullPath, {
			params: getQueryParameters(options),
			headers: getCustomHeaders(headers),
			responseType: 'json',
		});
	}

	executePATCH<T>(path: string, body?: any, options?: any): Observable<T> {
		return this.httpClient.patch<T>(`${environment.apiBasePath}${path}`, body, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
		});
	}

	executePOST<T>(path: string, body: any, options?: any): Observable<T> {
		return this.httpClient.post<T>(`${environment.apiBasePath}${path}`, body, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
		});
	}

	executePOSTWithObserveResponse<T>(path: string, body: any, options?: any): Observable<HttpResponse<T>> {
		return this.httpClient.post<T>(`${environment.apiBasePath}${path}`, body, {
			params: getQueryParameters(options),
			observe: 'response',
			responseType: 'json',
			headers: getDefaultHeaders(),
		});
	}

	executePUT<T>(path: string, body: any, options?: any): Observable<T> {
		return this.httpClient.put<T>(`${environment.apiBasePath}${path}`, body, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
		});
	}

	executeDELETE<T>(path: string, options?: any): Observable<T> {
		return this.httpClient.delete<T>(`${environment.apiBasePath}${path}`, {
			params: getQueryParameters(options),
			headers: getDefaultHeaders(),
		});
	}
}
