export class TimeStampUtils {
    public static parseToLocaleTime(timeStamp: string) {
        return new Date(timeStamp).toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    public static parseToLocaleDate(timeStamp: string) {
        return new Date(timeStamp).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }
}
