class MatchService {
    public async readMatchDetailById(id: number) {
        console.log("id : ", id);
    }
}

export const matchService = new MatchService();
