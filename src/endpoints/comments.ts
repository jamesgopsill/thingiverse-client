import type { ThingiverseClient } from "../index.js"

export function comment(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/comments/${id}`
	return this._fetch<Comment>("GET", url)
}

export function replies(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/comments/${id}/replies`
	return this._fetch<Comment[]>("GET", url)
}

export function newComment(
	this: ThingiverseClient,
	targetId: string,
	targetType: "thing" | "make",
	body: string
) {
	const url = `${this._urls[this._server]}/comments/`
	const params = {
		targetId,
		targetType,
		body,
	}
	return this._fetch("POST", url, params)
}

export function replyToComment(
	this: ThingiverseClient,
	id: string,
	body: string
) {
	const url = `${this._urls[this._server]}/comments/${id}/reply`
	const params = {
		body,
	}
	return this._fetch("POST", url, params)
}

export function updateComment(
	this: ThingiverseClient,
	id: string,
	body: string
) {
	const url = `${this._urls[this._server]}/comments/${id}`
	const params = {
		body,
	}
	return this._fetch("PATCH", url, params)
}

export function deleteComment(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/comments/${id}`
	return this._fetch("DELETE", url)
}
