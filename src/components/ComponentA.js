import React from 'react';
import {useJsonFetch} from "../hooks/useJsonFetch";

const ComponentA = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data')
    return (
        <>
            <div>Component A</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {error.message}</div>}
        </>
    );
};

export default ComponentA;