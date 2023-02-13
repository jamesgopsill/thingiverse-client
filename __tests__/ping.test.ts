import { ThingiverseClient } from "../src/index.js"

let c: ThingiverseClient

beforeAll(() => {
	c = new ThingiverseClient()
})

test(`Ping`, () => {
	expect(c.ping()).toBe("pong")
})
