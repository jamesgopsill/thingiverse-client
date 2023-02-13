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
	registered: string
	lastActive: string
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

export interface Thing {
	id: string
	name: string
	url: string
	publicUrl: string
	createdAt: string
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
	added: string
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
