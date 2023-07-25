import { existsSync, readFileSync } from "node:fs"
import url from "node:url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

export let auth = {
	appToken: "",
}

const fname = `${__dirname}/../config/test-auth.json`

if (existsSync(fname)) {
	auth = JSON.parse(readFileSync(fname).toString())
}

if (process.env["THINGIVERSE_APP_TOKEN"] != undefined) {
	auth.appToken = process.env["THINGIVERSE_APP_TOKEN"]
}
