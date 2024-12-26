import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useRemoveSearchParams = () => {
    const [_, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({});
    }, []);
};
