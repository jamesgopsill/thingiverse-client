import { ThingiverseClient } from "../src/index.js"
import { accessToken } from "./test.config.js"

let c: ThingiverseClient

beforeAll(() => {
	c = new ThingiverseClient(accessToken, "production")
})

test(`Ping`, () => {
	expect(c.ping()).toBe("pong")
})
