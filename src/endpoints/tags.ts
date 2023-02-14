import type { Thing, ThingiverseClient, Tag } from "../index.js"

export function thingsByTag(this: ThingiverseClient, tag: string) {
	const url = `${this._urls[this._server]}/tags/${tag}/things`
	return this._fetch<Thing[]>("GET", url)
}

export function tag(this: ThingiverseClient, tag: string) {
	const url = `${this._urls[this._server]}/tags/${tag}`
	return this._fetch<Tag>("GET", url)
}
