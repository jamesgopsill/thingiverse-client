import { fetchIt } from "./fetch-it.js"
import * as User from "./endpoints/user.js"
import * as Thing from "./endpoints/things.js"

export * from "./definitions/interfaces.js"

export class ThingiverseClient {
	protected _urls = {
		staging: "https://api-staging.thingiverse.com",
		production: "https://api.thingiverse.com",
	}
	protected _clientId: string = ""
	protected _clientSecret: string = ""
	protected _appToken: string = ""
	protected _bearerToken: string = ""
	protected _server: "staging" | "production" = "staging"

	constructor(
		appToken: string = "",
		server: "staging" | "production" = "staging"
	) {
		this._appToken = appToken
		this._server = server
	}

	protected _fetch = fetchIt
	public ping = () => "pong"

	// User endpoints
	public user = User.user
	public updateUser = User.updateUser
	public deleteUser = User.deleteUser
	public searchUserThings = User.searchUserThings
	public userThings = User.userThings
	public userFavoriteThings = User.userFavoriteThings
	public userLikedThings = User.userLikedThings
	public userCopies = User.userCopies
	public userCollections = User.userCollections
	public userDownloadedThings = User.userDownloadedThings
	public userCollectedThings = User.userCollectedThings
	public userUnreadMessageCount = User.userUnreadMessageCount
	public followUser = User.followUser
	public unfollowUser = User.unfollowUser
	public updateUserAvatarImage = User.updateUserAvatarImage
	public updateCoverImage = User.updateCoverImage
	public userVerificationEmail = User.userVerificationEmail
	public userEventCount = User.userEventCount

	// Thing endpoints
	public thing = Thing.thing
	public thingImages = Thing.thingImages
	public updateThingImage = Thing.updateThingImage
	public deleteThingImage = Thing.deleteThingImage
	public thingFiles = Thing.thingFiles
	public deleteThingFile = Thing.deleteThingFile
	public thingLikedUsers = Thing.thingLikedUsers
	public thingAncestors = Thing.thingAncestors
	public thingDerivatives = Thing.thingDerivatives
	public thingTags = Thing.thingTags
	public thingCategories = Thing.thingCategories
	public updateThing = Thing.updateThing
	public createThing = Thing.createThing
	public deleteThing = Thing.deleteThing
	public uploadFileToThing = Thing.uploadFileToThing
	public publishThing = Thing.publishThing
	public thingCopies = Thing.thingCopies
	public uploadCopy = Thing.uploadCopy
	public like = Thing.like
	public removeLike = Thing.removeLike
	public thingPrints = Thing.thingPrints
	public thingThreadedComments = Thing.thingThreadedComments
	public thingComments = Thing.thingComments
	public thingRootComments = Thing.thingRootComments
	public postCommentOnThing = Thing.postCommentOnThing
	public toggleWatchThing = Thing.toggleWatchThing
	public thingTrackingViews = Thing.thingTrackingViews
}
