import fetch, { CancelToken } from "axios";
import { getBaseUrl } from "./helper";
import webHistory from "./webHistory";

const baseUrl = `${getBaseUrl()}/`;

const handleRequestError = (requestUrl: string, err: any) => {
	const router = webHistory;
	console.log(router);
	try {
		if (err && err.response) {
			if (err.response.data.code === 401) {
				// console.log("跳转到登陆页面")
			} else if (err.response.data.code === 500) {
				// console.log("跳转到错误页面")
			}
			throw err;
		}
	} catch (err: any) {
		if (err.message === "Network Error") {
			// console.log("跳转到网络错误页面")
		}
	}
};

const commonRequest = async (
	method: string,
	path: string,
	arr: { params?: any; data?: any; cancelToken?: CancelToken },
) => {
	const options = {
		method,
		url: `${baseUrl}${path}`,
		...arr,
	};

	try {
		const response = await fetch(options);
		// check服务器返回
		return response.data.data;
	} catch (err: any) {
		handleRequestError(path, err);
	}
};

export function get(url: string, params = {}, cancelToken?: CancelToken) {
	return commonRequest("get", url, { params, cancelToken });
}

export function post<T>(url: string, data = {}, cancelToken?: CancelToken): T {
	return commonRequest("post", url, { data: { ...data }, cancelToken }) as T;
}

export function put<T>(url: string, data = {}, cancelToken?: CancelToken): T {
	return commonRequest("put", url, { data: { ...data }, cancelToken }) as T;
}

export function del<T>(url: string, data = {}, cancelToken?: CancelToken): T {
	return commonRequest("delete", url, { data: { ...data }, cancelToken }) as T;
}
