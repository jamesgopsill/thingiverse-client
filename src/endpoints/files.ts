import type { ThingiverseClient, ThingFile } from "../index.js"

export function file(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/files/${id}`
	return this._fetch<ThingFile>("GET", url)
}

export function finalizeFile(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/files/${id}/finalize`
	return this._fetch<ThingFile>("POST", url)
}

export function downloadFile(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/files/${id}/download`
	return this._fetch("GET", url)
}
