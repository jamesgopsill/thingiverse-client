import { ThingiverseClient } from "../src/index.js"
import { accessToken } from "./test.config.js"

let c: ThingiverseClient
const username = "manabun"

beforeAll(() => {
	c = new ThingiverseClient(accessToken, "production")
})

test(`Get User`, async () => {
	const r = await c.user(username)
	expect(r.ok).toBe(true)
})

test(`Search User Things`, async () => {
	const r = await c.searchUserThings(username, "USB")
	expect(r.ok).toBe(true)
})

test(`User Things`, async () => {
	const r = await c.userThings(username)
	expect(r.ok).toBe(true)
})

test(`User Favorite Things`, async () => {
	const r = await c.userFavoriteThings(username)
	expect(r.ok).toBe(true)
})

test(`User Liked Things`, async () => {
	const r = await c.userLikedThings(username)
	expect(r.ok).toBe(true)
})

test(`User Copies`, async () => {
	const r = await c.userCopies(username)
	expect(r.ok).toBe(true)
})

test(`User Collections`, async () => {
	const r = await c.userCollections(username)
	expect(r.ok).toBe(true)
})

test(`User Downloaded Things`, async () => {
	const r = await c.userDownloadedThings(username)
	expect(r.ok).toBe(false)
})

test(`User Event Count`, async () => {
	const r = await c.userEventCount(username)
	console.log(r.status, r.statusText)
	console.log(r.content)
	expect(r.ok).toBe(true)
})

test(`User Collected Things`, async () => {
	const r = await c.userDownloadedThings(username)
	expect(r.ok).toBe(false)
})

test(`User Unread Message Count`, async () => {
	const r = await c.userUnreadMessageCount(username)
	expect(r.ok).toBe(true)
})
