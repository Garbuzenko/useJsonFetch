import {useEffect, useState} from 'react';
import axios from "axios"

export function useJsonFetch (url, opts) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                } catch (err) {
                    setError(err)
                    setData(null)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return [data, loading, error]
}