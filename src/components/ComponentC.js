import React from 'react';
import {useJsonFetch} from "../hooks/useJsonFetch";

const ComponentC = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading')

    return (
        <>
            <div>Component C</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {JSON.stringify(error.message)}</div>}
        </>
    );
};

export default ComponentC;