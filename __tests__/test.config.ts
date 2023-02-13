import { existsSync, readFileSync } from "node:fs"

export let accessToken = ""

const fname = `${__dirname}/access-token.txt`

if (existsSync(fname)) {
	accessToken = readFileSync(fname).toString()
}

// TODO attempt the access it from env var for GitHub Actions.
