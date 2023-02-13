import type {
	Paginated,
	PatchUserDetails,
	ThingiverseClient,
	User,
	Thing,
	Collection,
	UnreadMessageCount,
} from "../index.js"

export function me(this: ThingiverseClient) {
	const url = `${this._urls[this._server]}/users/me`
	return this._fetch("GET", url)
}

export function user(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}`
	return this._fetch<User>("GET", url)
}

export function updateUser(
	this: ThingiverseClient,
	username: string,
	userDetails: PatchUserDetails
) {
	const url = `${this._urls[this._server]}/users/${username}`
	return this._fetch<User>("PATCH", url, userDetails)
}

export function deleteUser(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}`
	return this._fetch<undefined>("DELETE", url)
}

export function searchUserThings(
	this: ThingiverseClient,
	username: string,
	searchTerm: string
) {
	const url = `${
		this._urls[this._server]
	}/users/${username}/search/${searchTerm}`
	return this._fetch<Paginated<Thing>>("GET", url)
}

export function userThings(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/things`
	return this._fetch<Thing[]>("GET", url)
}

export function userFavoriteThings(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/favorites`
	return this._fetch<Thing[]>("GET", url)
}

export function userLikedThings(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/likes`
	return this._fetch<Thing[]>("GET", url)
}

export function userCopies(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/copies`
	// TODO: fully type copies
	return this._fetch<any[]>("GET", url)
}

export function userCollections(
	this: ThingiverseClient,
	username: string,
	all: boolean = false
) {
	const url = `${this._urls[this._server]}/users/${username}/collections/${all}`
	return this._fetch<Collection[]>("GET", url)
}

export function userDownloadedThings(
	this: ThingiverseClient,
	username: string
) {
	const url = `${this._urls[this._server]}/users/${username}/downloads`
	return this._fetch<Thing[]>("GET", url)
}

export function userVerificationEmail(
	this: ThingiverseClient,
	username: string
) {
	const url = `${this._urls[this._server]}/users/${username}/verify-account`
	return this._fetch("POST", url)
}

export function userEventCount(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/event-count`
	return this._fetch("GET", url)
}

export function userCollectedThings(this: ThingiverseClient, username: string) {
	const url = `${
		this._urls[this._server]
	}/users/${username}/all-collected-things`
	return this._fetch<Thing[]>("GET", url)
}

export function userUnreadMessageCount(
	this: ThingiverseClient,
	username: string
) {
	const url = `${
		this._urls[this._server]
	}/users/${username}/unread-message-count`
	return this._fetch<UnreadMessageCount>("GET", url)
}

export function followUser(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/followers`
	return this._fetch("POST", url)
}

export function unfollowUser(this: ThingiverseClient, username: string) {
	const url = `${this._urls[this._server]}/users/${username}/followers`
	return this._fetch("DELETE", url)
}

export function updateUserAvatarImage(this: ThingiverseClient) {
	// TODO:
	// const url = `${this._urls[this._server]}/users/${username}/avatar-image`
	return "Not yet implemented" //this._fetch("POST", url)
}

export function updateCoverImage(this: ThingiverseClient) {
	// TODO:
	// const url = `${this._urls[this._server]}/users/${username}/avatar-image`
	return "Not yet implemented" //this._fetch("POST", url)
}
