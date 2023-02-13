import type { ThingiverseClient, HttpResponse } from "./index.js"

export async function fetchIt<T>(
	this: ThingiverseClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	bodyArgs: { [k: string]: string } = {}
) {
	let config: any = {
		method,
		mode: "cors",
		headers: {},
	}
	if (this._appToken) {
		url += `?access_token=${this._appToken}`
	}
	if (this._bearerToken) {
		config.headers["Authorization"] = `Bearer ${this._bearerToken}`
	}
	if (typeof bodyArgs === "object") {
		config.headers["Content-Type"] = "application/json"
		config.body = JSON.stringify(bodyArgs)
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type") === "application/json") {
			r.content = await r.json()
		}
	}
	return r
}
