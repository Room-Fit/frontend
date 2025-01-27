import { useState } from "react";

export const useTimer = (time: number) => {
    const [seconds, setSeconds] = useState(time);

    const startTimer = () => {
        const timer = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    };

    const formatTime = () => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return { seconds: formatTime(), startTimer };
};
