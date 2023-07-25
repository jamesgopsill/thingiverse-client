import assert from "node:assert"
import test, { before, describe } from "node:test"

import { ThingiverseClient } from "../src/index.js"
import { auth } from "./test.config.js"

let c: ThingiverseClient
const username = "manabun"

describe(`User Tests`, { concurrency: 2 }, () => {
	before(() => {
		c = new ThingiverseClient(auth.appToken, "production")
	})

	test(`Get User`, async () => {
		const r = await c.user(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`Search User Things`, async () => {
		const r = await c.searchUserThings(username, "USB")
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Things`, async () => {
		const r = await c.userThings(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Favorite Things`, async () => {
		const r = await c.userFavoriteThings(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Liked Things`, async () => {
		const r = await c.userLikedThings(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Copies`, async () => {
		const r = await c.userCopies(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Collections`, async () => {
		const r = await c.userCollections(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})

	test(`User Downloaded Things`, async () => {
		const r = await c.userDownloadedThings(username)
		assert.strictEqual(r.ok, false, r.statusText)
	})

	test(`User Collected Things`, async () => {
		const r = await c.userDownloadedThings(username)
		assert.strictEqual(r.ok, false, r.statusText)
	})

	test(`User Unread Message Count`, async () => {
		const r = await c.userUnreadMessageCount(username)
		assert.strictEqual(r.ok, true, r.statusText)
	})
})
