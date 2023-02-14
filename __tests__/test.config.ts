import { existsSync, readFileSync } from "node:fs"

export let auth = {
	accessToken: "",
}

const fname = `${__dirname}/test-auth.json`

if (existsSync(fname)) {
	auth = JSON.parse(readFileSync(fname).toString())
}

if (process.env["THINGIVERSE_APP_TOKEN"] != undefined) {
	auth.accessToken = process.env["THINGIVERSE_APP_TOKEN"]
}
