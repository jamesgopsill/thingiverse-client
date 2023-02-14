export type HttpResponse<T> =
	| ({
			ok: true
			status: 200
			content: T
	  } & Response)
	| ({
			ok: true
			status: 204
			content: undefined
	  } & Response)
	| ({
			ok: false
			content: undefined
	  } & Response)

//export type ObjectOrStringOrBuffer = { [k: string]: any } | string | Buffer

export interface PatchUserDetails {
	firstName?: string
	lastName?: string
	bio?: string
	location?: string
	defaultLicense?: string
}

export interface User {
	id: number
	name: string
	firstName: string
	lastName: string
	fullName: string
	url: string
	publicUrl: string
	thumbnail: string
	bio: string
	bioHtml: string
	location: string
	country: string
	industry: string
	subindustry: string | null
	registered: Date
	lastActive: Date
	coverImage: string
	thingsUrl: string
	copiesUrl: string
	likesUrl: string
	printers: Printer[]
	programs: Program[]
	types: UserType[]
	skillLevel: string
	acceptsTips: boolean
	groups: any[]
	website: string | null
	twitter: string | null
	countOfFollowers: number
	countOfFollowing: number
	countOfDesigns: number
	collectionCount: number
	makeCount: number
	likeCount: number
	hasFavorite: boolean
	favoriteCount: number
	isAdmin: boolean
	isFollowing: boolean
}

export interface Printer {
	id: string
	name: string
	publicUrl: string
}

export interface Program {
	id: string
	name: string
}

export interface UserType {
	id: string
	name: string
}

export interface Paginated<T> {
	total: number
	hits: T[]
}

export interface Creator {
	id: string
	name: string
	firstName: string
	lastName: string
	fullName: string
	url: string
	publicUrl: string
	thumbnail: string
	countOfFollowers: number
	countOfFollowing: number
	countOfDesigns: number
	acceptTips: boolean
	isFollowing: boolean
	location: string
	cover: string
	isAdmin: number
}

export interface PartialThing {
	id: string
	name: string
	url: string
	publicUrl: string
	createdAt: Date
	thumbnail: string
	previewImage: string
	creator: Creator
	isPrivate: boolean | null
	isPurchased: boolean | null
	isPublished: boolean | null
	commentCount: number
	makecount: number
	likeCount: number
	tags: Tag[]
	isNsfw: boolean
	rank: any | null
	collectCount: number
}

export interface Thing {
	id: string
	name: string
	thumbnail: string
	url: string
	publicUrl: string
	creator: Creator
	added: Date
	modified: Date
	isPublished: number
	isWip: number
	isFeatured: boolean | null
	isNsfw: boolean
	likeCount: number
	isLiked: boolean
	collectCount: number
	isCollected: number
	commentCount: number
	isWatched: boolean
	defaultImage: ThingImage
	description: string
	detailsParts: Part[]
	eduDetails: string
	eduDetailsParts: EduDetailPart[]
	license: string
	allowsDerivatives: boolean
	filesUrl: string
	imagesUrl: string
	likesUrl: string
	ancestorsUrl: string
	derivativesUrl: string
	tagsUrl: string
	tags: Tag[]
	categoriesUrl: string
	fileCount: number
	layoutCount: number
	layoutsUrl: string
	isPrivate: number
	isPurchased: number
	inLibrary: boolean
	printHistoryCount: number
	appId: string | null
	downloadCount: number
	education: {
		grades: any[]
		subjects: any[]
	}
	remixCount: number
	makeCount: number
	appCount: number
	rootCommentCount: number
	moderation: string
	isDerivative: boolean
	ancestors: any[]
	canComment: boolean
	typeName: string
	isBanned: boolean
	needsModeration: number
}

export interface EduDetailPart {
	type: string
	name: string
	required?: string
	saveAsComponent?: boolean
	template?: string
	fieldname?: string
	default?: string
	opts?: any
}

export interface Part {
	type: string
	name: string
	required?: boolean
	data?: any[]
}

export interface ThingImage {
	id: string
	url: string
	name: string
	sizes: any[]
	added: Date
}

export interface ThingFile {
	id: string
	name: string
	size: number
	url: string
	publicUrl: string
	downloadUrl: string
	threejsUrl: string
	thumbnail: string
	defaultImage: ThingImage | null
	date: Date
	formattedSize: string
	metadata: any[]
	downloadCount: number
	directUrl: string
}

export interface Tag {
	name: string
	tag: string
	url: string
	count: number
	thingsUrl: string
	absoluteUrl: string
}

export interface Collection {
	id: string
	name: string
	description: string
	added: Date
	modified: string
	creator: Creator
	url: string
	count: number
	isEditable: boolean
	previewImage: string
	absoluteUrl: string
	thumbnail: string
	thumbnail_1?: string
	thumbnail_2?: string
	thumbnail_3?: string
}

export interface UnreadMessageCount {
	unreadMessageCount: number
}

export interface UpdateThing {
	name: string
	license: string
	category: string
	description: string
	instructions: string
	isWip: boolean
	tags: string[]
}

export interface CreateThing extends UpdateThing {
	ancestors: string[]
}

export interface Category {
	id: number
	name: string
	url: string
	count: number
	slug: string
	thingsUrl: string
}

export interface ThreadedComments {
	comments: { [k: string]: ThreadedComment[] }
	users: {
		[k: string]: {
			userName: string
			userAvatar: string
			isAdmin: number
		}
	}
}

export interface ThreadedComment {
	id: string
	addDate: string
	modifiedDate: string | null
	body: string
	userId: string
	isDeleted: boolean
	url: string
	needsModeration: number
	assets: any[]
	parentId: string
	parentUserName: string
	parentUrl: string
}

export interface Comment {
	id: string
	url: string
	targetType: string
	targetId: number
	publicUrl: string
	targetUrl: string
	body: string
	bodyHtml: string
	user: Creator
	added: Date
	modified: string
	parentId: string
	parentUrl: string
	isDeleted: boolean
	attachments: []
	needsModeration: boolean
	isRootComment: boolean
	hasChildren: boolean
	topicName: string | null
	things: any[]
}

export interface Watching {
	watching: boolean
}
