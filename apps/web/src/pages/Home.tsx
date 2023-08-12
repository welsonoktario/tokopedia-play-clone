import { Button } from '@radix-ui/themes'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h1>Halo</h1>
      <Button asChild>
        <Link to="/videos/1">Halo bag</Link>
      </Button>
    </>
  )
}
