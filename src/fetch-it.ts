import { keysToCamel, keysToSnake } from "./format-keys.js"
import type { ThingiverseClient, HttpResponse } from "./index.js"
import { parseDates } from "./parse-dates.js"

export async function fetchIt<T>(
	this: ThingiverseClient,
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
	url: string,
	bodyArgs: { [k: string]: any } | undefined = undefined
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
		bodyArgs = keysToSnake(bodyArgs)
		config.headers["Content-Type"] = "application/json"
		config.body = JSON.stringify(bodyArgs)
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.content = undefined
	if (r.ok && r.status === 200) {
		if (r.headers.get("Content-Type")?.includes("application/json")) {
			let content = await r.json()
			content = keysToCamel(content)
			parseDates(content)
			r.content = content
		}
	}
	return r
}
