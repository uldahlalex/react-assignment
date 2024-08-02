import {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function useApiData<T>(
    loaderFunc: (
        params: Record<string, string | undefined>,
    ) => Promise<AxiosResponse<T, any>>,
) {
    const params = useParams();
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState();

    useEffect(() => {
        let ignore = false;
        setData(null);
        loaderFunc(params)
            .then((response) => {
                if (!ignore) {
                    setError(undefined);
                    setData(response.data);
                }
            })
            .catch((error) => {
                if (!ignore) setError(error);
            });
        return () => {
            ignore = true;
        };
    }, [params]);
    if (error) throw error;
    return data;
}