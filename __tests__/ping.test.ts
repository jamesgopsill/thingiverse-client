import assert from "node:assert"
import test, { before } from "node:test"

import { ThingiverseClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ThingiverseClient

before(() => {
	c = new ThingiverseClient(auth.appToken, "production")
})

test(`Ping`, () => {
	assert.strictEqual(c.ping(), "pong", "Ping not Pong")
})
