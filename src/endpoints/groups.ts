import type { ThingiverseClient, Thing, Creator } from "../index.js"

export function group(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/groups/${id}`
	return this._fetch<unknown>("GET", url)
}

export function newGroup(
	this: ThingiverseClient,
	name: string,
	description: string,
	slug: string
) {
	const url = `${this._urls[this._server]}/groups`
	const params = {
		name,
		description,
		slug,
	}
	return this._fetch<unknown>("GET", url, params)
}

export function updateGroupImage(
	this: ThingiverseClient,
	id: string,
	filename: string
) {
	const url = `${this._urls[this._server]}/groups/${id}/image`
	const params = {
		filename,
	}
	return this._fetch<unknown>("POST", url, params)
}

export function updateGroup(
	this: ThingiverseClient,
	id: string,
	name: string,
	description: string
) {
	const url = `${this._urls[this._server]}/groups/${id}`
	const params = {
		name,
		description,
	}
	return this._fetch<unknown>("PATCH", url, params)
}

export function deleteGroup(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/groups/${id}`
	return this._fetch<number>("DELETE", url)
}

export function groupTopics(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/groups/${id}/group-topics`
	return this._fetch<unknown>("GET", url)
}

export function groupTopicsComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/groups/${id}/group-topics-comments`
	return this._fetch<unknown>("GET", url)
}

export function newGroupTopic(
	this: ThingiverseClient,
	id: string,
	name: string,
	body: string
) {
	const url = `${this._urls[this._server]}/groups/${id}/group-topics`
	const params = {
		name,
		body,
	}
	return this._fetch<unknown>("POST", url, params)
}

export function groupThings(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/groups/${id}/things`
	return this._fetch<Thing[]>("GET", url)
}

export function addThingToGroup(
	this: ThingiverseClient,
	groupId: string,
	thingId: string
) {
	const url = `${this._urls[this._server]}/groups/${groupId}/things/${thingId}`
	return this._fetch<unknown>("POST", url)
}

export function removeThingFromGroup(
	this: ThingiverseClient,
	groupId: string,
	thingId: string
) {
	const url = `${this._urls[this._server]}/groups/${groupId}/things/${thingId}`
	return this._fetch<unknown>("DELETE", url)
}

export function updateGroupThing(
	this: ThingiverseClient,
	groupId: string,
	thingId: string,
	rank: 0 | 1 | 2 | 3
) {
	const url = `${this._urls[this._server]}/groups/${groupId}/things/${thingId}`
	const params = { rank }
	return this._fetch<unknown>("DELETE", url, params)
}

export function groupMembers(this: ThingiverseClient, groupId: string) {
	const url = `${this._urls[this._server]}/groups/${groupId}/members`
	return this._fetch<Creator[]>("GET", url)
}

export function joinGroup(this: ThingiverseClient, groupId: string) {
	const url = `${this._urls[this._server]}/groups/${groupId}/members`
	return this._fetch<unknown>("POST", url)
}

export function leaveGroup(
	this: ThingiverseClient,
	groupId: string,
	userId: string
) {
	const url = `${this._urls[this._server]}/groups/${groupId}/members/${userId}`
	return this._fetch<unknown>("DELETE", url)
}
