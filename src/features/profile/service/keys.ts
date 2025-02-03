export const PROFILE_QUERY_KEY_FACTORY = {
    READ_RECENT_SURVEY: () => ["SURVEY"],
    READ_SURVEY_REPLY_BY_ID: (id: number) => ["SURVEY_REPLY", { id }],
};
