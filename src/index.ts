import { fetchIt } from "./fetch-it.js"

export * from "./definitions/interfaces.js"

export class ThingiverseClient {
	protected _clientId: string = ""
	protected _clientSecret: string = ""
	protected _appToken: string = ""
	protected _bearerToken: string = ""

	constructor() {}

	protected _fetch = fetchIt
	public ping = () => "pong"
}
