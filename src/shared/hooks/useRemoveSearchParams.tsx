import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useRemoveSearchParams = () => {
    const [, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({});
    }, [setSearchParams]);
};
