import { ThingiverseClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ThingiverseClient

beforeAll(() => {
	c = new ThingiverseClient(auth.accessToken, "production")
})

test(`Ping`, () => {
	expect(c.ping()).toBe("pong")
})
