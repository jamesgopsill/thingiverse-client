import assert from "node:assert"
import test, { before, describe } from "node:test"

import { ThingiverseClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ThingiverseClient

describe(`Thing Tests`, { concurrency: 2 }, () => {
	before(() => {
		c = new ThingiverseClient(auth.appToken, "production")
	})

	test(`Get Thing`, async () => {
		const thing = "763622"
		const r = await c.thing(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Images`, async () => {
		const thing = "763622"
		const r = await c.thingImages(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Files`, async () => {
		const thing = "763622"
		const r = await c.thingFiles(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Liked Users`, async () => {
		const thing = "5797144"
		const r = await c.thingLikedUsers(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Ancestors`, async () => {
		const thing = "763622"
		const r = await c.thingAncestors(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Derivatives`, async () => {
		const thing = "763622"
		const r = await c.thingDerivatives(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Tags`, async () => {
		const thing = "763622"
		const r = await c.thingTags(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Categories`, async () => {
		const thing = "763622"
		const r = await c.thingCategories(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Copies`, async () => {
		const thing = "763622"
		const r = await c.thingCopies(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Prints`, async () => {
		const thing = "763622"
		const r = await c.thingPrints(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Threaded Comments`, async () => {
		const thing = "5806802"
		const r = await c.thingThreadedComments(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Comments`, async () => {
		const thing = "5806802"
		const r = await c.thingComments(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Get Thing Root Comments`, async () => {
		const thing = "5806802"
		const r = await c.thingRootComments(thing)
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
