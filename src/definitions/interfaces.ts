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
