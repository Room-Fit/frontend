export class TimeStampUtils {
    public static toLocaleTime(timeStamp: string) {
        return new Date(timeStamp).toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    public static toLocaleDate(timeStamp: string) {
        const date = new Date(timeStamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const weekday = date.toLocaleDateString("ko-KR", { weekday: "long" });

        return `${year}년 ${month}월 ${day}일 ${weekday}`;
    }
}
