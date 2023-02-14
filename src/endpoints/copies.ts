import type {
	ThingImage,
	ThingiverseClient,
	ThreadedComments,
	Comment,
} from "../index.js"

export function copies(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}`
	return this._fetch<any>("GET", url)
}

export function copyImages(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/images`
	return this._fetch<ThingImage[]>("GET", url)
}

export function patchCopyImage(
	this: ThingiverseClient,
	copyId: string,
	imageId: string,
	rank: number,
	featured: boolean
) {
	const url = `${this._urls[this._server]}/copies/${copyId}/images/${imageId}`
	const params = {
		rank,
		featured,
	}
	return this._fetch("PATCH", url, params)
}

export function deleteCopyImage(
	this: ThingiverseClient,
	copyId: string,
	imageId: string
) {
	const url = `${this._urls[this._server]}/copies/${copyId}/images/${imageId}`
	return this._fetch("DELETE", url)
}

export function patchCopy(
	this: ThingiverseClient,
	id: string,
	description: string
) {
	const url = `${this._urls[this._server]}/copies/${id}`
	const params = {
		description,
	}
	return this._fetch("DELETE", url, params)
}

export function deleteCopy(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}`
	return this._fetch("DELETE", url)
}

export function likeCopy(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/likes`
	return this._fetch("POST", url)
}

export function removeCopyLike(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/likes`
	return this._fetch("DELETE", url)
}

export function copyThreadedComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/threaded-comments`
	return this._fetch<ThreadedComments>("GET", url)
}

export function copyRootComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/root-comments`
	return this._fetch<Comment[]>("GET", url)
}

export function copyComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/copies/${id}/comments`
	return this._fetch<Comment[]>("GET", url)
}

export function postComment(this: ThingiverseClient) {
	//TODO:
	return "Not implemented yet"
}
