import { defaultFemaleAvatar, defaultMaleAvatar } from "../mock/mockdata"

export const profilePic = (details) => {
    return details.profile ?? (details.gender == "M" ? defaultMaleAvatar : defaultFemaleAvatar)
}