import { ThingiverseClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ThingiverseClient

beforeAll(() => {
	c = new ThingiverseClient(auth.accessToken, "production")
})

test(`Get Thing`, async () => {
	const thing = "763622"
	const r = await c.thing(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Images`, async () => {
	const thing = "763622"
	const r = await c.thingImages(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Files`, async () => {
	const thing = "763622"
	const r = await c.thingFiles(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Liked Users`, async () => {
	const thing = "5797144"
	const r = await c.thingLikedUsers(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Ancestors`, async () => {
	const thing = "763622"
	const r = await c.thingAncestors(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Derivatives`, async () => {
	const thing = "763622"
	const r = await c.thingDerivatives(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Tags`, async () => {
	const thing = "763622"
	const r = await c.thingTags(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Categories`, async () => {
	const thing = "763622"
	const r = await c.thingCategories(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Copies`, async () => {
	const thing = "763622"
	const r = await c.thingCopies(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Prints`, async () => {
	const thing = "763622"
	const r = await c.thingPrints(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Threaded Comments`, async () => {
	const thing = "5806802"
	const r = await c.thingThreadedComments(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Comments`, async () => {
	const thing = "5806802"
	const r = await c.thingComments(thing)
	expect(r.ok).toBe(true)
})

test(`Get Thing Root Comments`, async () => {
	const thing = "5806802"
	const r = await c.thingRootComments(thing)
	expect(r.ok).toBe(true)
})
