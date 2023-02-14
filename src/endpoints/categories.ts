import type { Category, Thing, ThingiverseClient } from "../index.js"

export function category(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/categories/${id}`
	return this._fetch<Category>("GET", url)
}

export function categoryThings(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/categories/${id}/things`
	return this._fetch<Thing[]>("GET", url)
}
