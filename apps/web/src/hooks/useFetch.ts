import { useEffect, useState } from 'react'

type JsonResponseType<T = unknown> = {
  status: string
  data: T
}

export const useFetch = <T = unknown>(url: string, options?: RequestInit) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!url) {
      return
    }

    const doFetch = async () => {
      setLoading(true)
      try {
        const res = await fetch(url, options)
        const json = (await res.json()) as JsonResponseType<T>

        setData(json.data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    doFetch()
  }, [url])

  return { loading, data, error }
}
