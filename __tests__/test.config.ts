import { existsSync, readFileSync } from "node:fs"

export let auth = {
	accessToken: "",
}

const fname = `${__dirname}/test-auth.json`

if (existsSync(fname)) {
	auth = JSON.parse(readFileSync(fname).toString())
}

// TODO attempt the access it from env var for GitHub Actions.
