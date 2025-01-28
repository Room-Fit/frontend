export const MATCH_QUERY_KEY_FACTORY = {
    READ_MATCH_DETAIL_BY_ID: (id: number) => ["MATCH", { id }],
    READ_ALL_MATCH: () => ["MATCH"],
};
