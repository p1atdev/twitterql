export interface Query {
    queryId: string
    operationName: string
    operationType: "mutations" | "queries"
}
