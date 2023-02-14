import type { ThingiverseClient, ThreadedComments } from "../index.js"

export function groupTopic(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/group-topics/${id}`
	return this._fetch<unknown>("GET", url)
}

export function updateGroupTopic(
	this: ThingiverseClient,
	id: string,
	name: string,
	body: string
) {
	const url = `${this._urls[this._server]}/group-topics/${id}`
	const params = {
		name,
		body,
	}
	return this._fetch<unknown>("POST", url, params)
}

export function pinGroupTopic(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/group-topics/${id}/pin`
	return this._fetch<unknown>("POST", url)
}

export function unpinGroupTopic(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/group-topics/${id}/pin`
	return this._fetch<unknown>("DELETE", url)
}

export function groupTopicThreadedComments(
	this: ThingiverseClient,
	id: string
) {
	const url = `${this._urls[this._server]}/group-topics/${id}/threaded-comments`
	return this._fetch<ThreadedComments>("GET", url)
}

export function groupTopicComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/group-topics/${id}/comments`
	return this._fetch<Comment[]>("GET", url)
}

export function postGroupTopicComment(
	this: ThingiverseClient,
	id: string,
	body: string
) {
	const url = `${this._urls[this._server]}/group-topics/${id}/comments`
	const params = { body }
	return this._fetch<Comment[]>("GET", url, params)
}
