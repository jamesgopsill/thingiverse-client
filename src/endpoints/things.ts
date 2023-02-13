import type {
	ThingiverseClient,
	Thing,
	Creator,
	Tag,
	UpdateThing,
	CreateThing,
	Watching,
	ThingImage,
	ThingFile,
	Category,
	PartialThing,
	Comment,
} from "../index.js"

export function thing(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}`
	return this._fetch<Thing>("GET", url)
}

export function thingImages(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/images`
	return this._fetch<ThingImage[]>("GET", url)
}

export function updateThingImage(this: ThingiverseClient) {
	// TODO: Impement
	return "Not yet implemented"
}

export function deleteThingImage(
	this: ThingiverseClient,
	id: string,
	imageId: string
) {
	const url = `${this._urls[this._server]}/things/${id}/images/${imageId}`
	return this._fetch("DELETE", url)
}

export function thingFiles(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/files`
	return this._fetch<ThingFile[]>("GET", url)
}

export function deleteThingFile(
	this: ThingiverseClient,
	id: string,
	fileId: string
) {
	const url = `${this._urls[this._server]}/things/${id}/files/${fileId}`
	return this._fetch("DELETE", url)
}

export function thingLikedUsers(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/likes`
	return this._fetch<Creator[]>("GET", url)
}

export function thingAncestors(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/ancestors`
	return this._fetch<Thing[]>("GET", url)
}

export function thingDerivatives(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/derivatives`
	return this._fetch<Thing[]>("GET", url)
}

export function thingTags(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/tags`
	return this._fetch<Tag[]>("GET", url)
}

export function thingCategories(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/categories`
	return this._fetch<Category[]>("GET", url)
}

export function updateThing(
	this: ThingiverseClient,
	id: string,
	params: UpdateThing
) {
	const url = `${this._urls[this._server]}/things/${id}`
	return this._fetch<Thing>("PATCH", url, params)
}

export function createThing(this: ThingiverseClient, params: CreateThing) {
	const url = `${this._urls[this._server]}/things`
	return this._fetch<Thing>("POST", url, params)
}

export function deleteThing(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}`
	return this._fetch("DELETE", url)
}

export function uploadFileToThing(this: ThingiverseClient) {
	// TODO: Implement
	return "Not yet implemented"
}

export function publishThing(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/publish`
	return this._fetch<Thing>("POST", url)
}

export function thingCopies(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/copies`
	return this._fetch<PartialThing[]>("GET", url)
}

export function uploadCopy(this: ThingiverseClient) {
	// TODO: Implement
	return "Not yet implemented"
}

export function like(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/likes`
	return this._fetch("POST", url)
}

export function removeLike(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/likes`
	return this._fetch("DELETE", url)
}

export function thingPrints(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/prints`
	return this._fetch<any[]>("GET", url)
}

export function thingThreadedComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/threaded-comments`
	return this._fetch<any>("GET", url)
}

export function thingComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/comments`
	return this._fetch<Comment[]>("GET", url)
}

export function thingRootComments(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/root-comments`
	return this._fetch<Comment[]>("GET", url)
}

export function postCommentOnThing(this: ThingiverseClient) {
	// TODO: Implement
	return "Not yet implemented"
}

export function toggleWatchThing(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/toggle-watch`
	return this._fetch<Watching>("POST", url)
}

export function thingTrackingViews(this: ThingiverseClient, id: string) {
	const url = `${this._urls[this._server]}/things/${id}/trackingViews`
	return this._fetch<undefined>("GET", url)
}
