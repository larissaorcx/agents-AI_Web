import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  rommId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.rommId) {
    return <Navigate replace to="/" />
  }

  return <div>Room details {JSON.stringify(params)}</div>
}
