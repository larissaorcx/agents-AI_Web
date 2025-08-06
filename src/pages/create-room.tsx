import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

type GetRoomsResponse = Array<{
  id: string
  name: string
}>

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
  return (
    <div>
      {isLoading && <span>Loading...</span>}

      <div className="flex h-screen flex-col items-center justify-center gap-1">
        {data?.map((room) => {
          return (
            <Link key={room.name} to={`/room/${room.id}`}>
              {room.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
