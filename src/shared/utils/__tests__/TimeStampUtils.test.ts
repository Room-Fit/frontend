import { TimeStampUtils } from "@/shared/utils/TimeStampUtils";

describe("TimeStampUtils", () => {
    test("toLocaleTime : (오전 | 오후)HH:mm 형식의 문자열을 반환합니다", () => {
        const timeStamp = "2021-08-09T09:00:00.000Z";
        expect(TimeStampUtils.toLocaleTime(timeStamp)).toBe("오후 06:00");
    });

    test("toLocaleDate : yyyy년 MM월 dd일 (요일) 형식의 문자열을 반환합니다", () => {
        const timeStamp = "2021-08-09T09:00:00.000Z";
        expect(TimeStampUtils.toLocaleDate(timeStamp)).toBe("2021년 08월 09일 월요일");
    });
});
