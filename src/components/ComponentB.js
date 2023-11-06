import React from 'react';
import {useJsonFetch} from "../hooks/useJsonFetch";

const ComponentB = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error')
    return (
        <>
            <div>Component B</div>
            {data && <div>Data: {JSON.stringify(data)}</div>}
            {loading && <div>Загрузка данных...</div>}
            {error && <div>Error: {error.message}}</div>}
        </>
    );
};

export default ComponentB;