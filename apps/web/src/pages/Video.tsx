import { Text } from '@radix-ui/themes'
import { useParams } from 'react-router-dom'

import { withTransition } from '@/components/withTransition'
import { useFetch } from '@/hooks'
import { VideoType } from '@/types'

export const VideoPage = withTransition(() => {
  const { videoId } = useParams()
  const { loading, data, error } = useFetch<VideoType>(`/videos/${videoId}`)

  return (
    <>
      <p>Video Page</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Text>{data?.id}</Text>
      )}
    </>
  )
})
