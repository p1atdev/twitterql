import { TQLResponse } from "./base.ts"

export interface UserTweetsRes extends TQLResponse {
    data: Data
}

export interface Data {
    user: User
}

export interface User {
    result: Result
}

export interface Result {
    typename: string
    timeline: ResultTimeline
}

export interface ResultTimeline {
    timeline: TimelineTimeline
}

export interface TimelineTimeline {
    instructions: Instruction[]
    responseObjects: ResponseObjects
}

export interface Instruction {
    type: string
    entries: Entry[]
}

export interface Entry {
    entryID: string
    sortIndex: string
    content: Content
}

export interface Content {
    entryType: string
    value: string
    cursorType: string
    stopOnEmptyResponse?: boolean
}

export interface ResponseObjects {
    feedbackActions: any[]
    immediateReactions: any[]
}
