import { getUserNameAvailable } from "../src/twitter/mod.ts"

const userNameAvailable = await getUserNameAvailable({
    username: "briArlF6zDwClPz",
})

console.dir(userNameAvailable, { depth: Number.MAX_SAFE_INTEGER })
