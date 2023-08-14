import { Box, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { useParams } from 'react-router-dom'

import { ProductCard } from '@/components/ProductCard/ProductCard'
import { withTransition } from '@/components/withTransition'
import { useFetch } from '@/hooks'
import { VideoType } from '@/types'

import styles from './Video.module.css'

export const VideoPage = withTransition(() => {
  const { videoId } = useParams()
  const { loading, data: video } = useFetch<VideoType>(`/videos/${videoId}`)

  return (
    <>
      {loading && <p>Loading...</p>}
      {video && (
        <Grid columns="6" gap="6">
          <Box className={styles.videoWrapper}>
            <Flex direction="column">
              <Heading mb="4">{video.title}</Heading>
              <iframe
                className="rt-r-h-100 rt-r-w-auto rt-r-mb-4"
                style={{ border: 0, aspectRatio: '16 / 9' }}
                src="https://www.youtube.com/embed/INE2Ys7-zZ0?&autoplay=1"
                allowFullScreen
              />
              <Text size="3" weight="bold" mb="2">
                Products in this video:
              </Text>
              <Flex className={styles.productsList} direction="row" gap="4">
                {video.products.length ? (
                  video.products.map((product, i) => (
                    <>
                      <ProductCard
                        key={product._id + i + 1}
                        product={product}
                      />
                      <ProductCard
                        key={product._id + i + 2}
                        product={product}
                      />
                      <ProductCard
                        key={product._id + i + 3}
                        product={product}
                      />
                      <ProductCard
                        key={product._id + i + 4}
                        product={product}
                      />
                      <ProductCard
                        key={product._id + i + 5}
                        product={product}
                      />
                    </>
                  ))
                ) : (
                  <Text>No products available</Text>
                )}
              </Flex>
            </Flex>
          </Box>
          <Box className={styles.commentWrapper}>
            <p>Halo</p>
          </Box>
        </Grid>
      )}
    </>
  )
})
