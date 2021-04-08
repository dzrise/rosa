import axios from "axios";
import { BASE_URL } from "@/constants/Global";

class ApiClient {
	constructor(options = {}) {
		this._baseUrl = BASE_URL;
		this._defaultHeaders = options.headers || {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6MTYxODcyOTgwMCwiaWQiOiIxZWM5MmU0MS1kMzU5LTRjZTItODk3Ny0wYTY1MmUwZDg0NjYifQ.jvMa-z4np6YMTofb1p_RqQ6E04fPpoeD6uQMScwbx2A"
		};

		this._instance = axios.create({
			baseURL: this._baseUrl,
			// timeout: I,
			headers: this._defaultHeaders
		});
		this._init();
	}

	_init() {
		// console.log(this._instance.interceptors.response);
		// this._instance.interceptors.request.use(
		// 	config => {
		// 		const token = localStorage.getItem("access_token");
		// 		console.log(config);
		// 		if (token) {
		// 			config.headers.common["Authorization"] = token;
		// 		}
		// 		return config;
		// 	},
		// 	error => {
		// 		return Promise.reject(error);
		// 	}
		// );
	}

	setHeaders(newHeaders) {
		this._defaultHeaders = { ...this._defaultHeaders, ...newHeaders };
		return this;
	}

	_successResponseHandler(response) {
		const responseData = { ...response, success: true };
		return { ...responseData };
	}

	_errorResponseHandler(error = {}) {
		const defaultError = { message: "Сервер недоступен" };
		const responseData = error.response?.data?.errors || error.response?.data?.message || [defaultError];
		let errorData = {
			error: true,
			response: responseData,
			status: error.response?.status || false
		};
		return { ...errorData };
	}

	async post(path = "", body = {}, params = {}) {
		const url = `${this._baseUrl}/${path}`;

		try {
			const response = await this._instance.post(url, body, params);
			return this._successResponseHandler(response);
		} catch (error) {
			if (error.isAxiosError) {
				return this._errorResponseHandler(error);
			}
			throw new Error(error);
		}
	}

	async get(path = "", params = {}) {
		try {
			const response = await this._instance.get(path, params);
			return this._successResponseHandler(response);
		} catch (error) {
			if (error.isAxiosError) {
				return this._errorResponseHandler(error);
			}
			throw new Error(error);
		}
	}

	async patch(path = "", body = {}, params = {}) {
		try {
			const response = await this._instance.patch(path, body, params);
			return this._successResponseHandler(response);
		} catch (error) {
			if (error.isAxiosError) {
				return this._errorResponseHandler(error);
			}
			throw new Error(error);
		}
	}

	async remove(path = "", params = {}) {
		try {
			const response = await this._instance.delete(path, params);
			return this._successResponseHandler(response);
		} catch (error) {
			if (error.isAxiosError) {
				return this._errorResponseHandler(error);
			}

			throw new Error(error);
		}
	}
}

const $http = new ApiClient();
export { $http };
