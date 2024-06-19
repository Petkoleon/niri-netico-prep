import {HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {KeyValueObject} from '@interfaces/key-value-object.interface';
import {CustomHttpUrlEncodingCodec} from "@core/utils/encoder";

export const getCustomHeaders = (customHeaders: KeyValueObject<string>): HttpHeaders => {
	let headers: HttpHeaders = new HttpHeaders(customHeaders);
	headers = headers.set('Content-Type', 'application/json');
	return headers;
}

export const getDefaultHeaders = (): HttpHeaders => {
	let headers: HttpHeaders = new HttpHeaders({
		Accept: 'application/json',
	});
	headers = headers.set('Content-Type', 'application/json');

	return headers;
};

export const getQueryParameters = (options?: any): HttpParams => {
	let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

	if (options) {
		Object.keys(options).forEach(key => {
			queryParameters = queryParameters.set(key, options[key]);
		});
	}

	return queryParameters;
};

export function downloadFile(blob: Blob, fileName: string): void {
	const link: HTMLAnchorElement = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.setAttribute('download', fileName);
	link.click();
}

export function getFileName(httpResponse: HttpResponse<any>): string | null {
	const contentDisposition: string | null = httpResponse.headers.get('Content-Disposition');
	const parts: string[] = contentDisposition?.split(';') || [];

	for (const part of parts) {
		if (part.includes('filename=')) {
			return part.trim().replace('filename=', '').replaceAll('"', '');
		}
	}
	return null;
}
