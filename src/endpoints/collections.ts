import type { Collection, Thing, ThingiverseClient } from "../index.js"

export function collection(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/collections/${id}`
	return this._fetch<Collection>("GET", url)
}

export function collectionThings(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/collections/${id}/things`
	return this._fetch<Thing[]>("GET", url)
}

export function newCollection(
	this: ThingiverseClient,
	name: string,
	description: string
) {
	const url = `${this._urls[this._server]}/collections/`
	const params = {
		name,
		description,
	}
	return this._fetch<Collection>("GET", url, params)
}

export function addThingToCollection(
	this: ThingiverseClient,
	collectionId: string,
	thingId: string,
	description: string = ""
) {
	const url = `${
		this._urls[this._server]
	}/collections/${collectionId}/thing/${thingId}`
	const params = { description }
	return this._fetch("POST", url, params)
}

export function removeThingFromCollection(
	this: ThingiverseClient,
	collectionId: string,
	thingId: string
) {
	const url = `${
		this._urls[this._server]
	}/collections/${collectionId}/thing/${thingId}`
	return this._fetch("DELETE", url)
}

export function updateCollection(
	this: ThingiverseClient,
	id: string,
	name: string,
	description: string
) {
	const url = `${this._urls[this._server]}/collections/${id}`
	const params = {
		name,
		description,
	}
	return this._fetch("PATCH", url, params)
}

export function deleteCollection(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/collections/${id}`
	return this._fetch("DELETE", url)
}
