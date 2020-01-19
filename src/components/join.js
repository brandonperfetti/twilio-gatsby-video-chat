import React, { useState } from "react"

const Join = () => {
  const [identity, setIdentity] = useState("")
  const [roomName, setRoomName] = useState("")

  return (
    <>
      <h1>Start or Join a Video Call</h1>
      <form className="start-form">
        <label htmlfor="identity">
          Display name:
          <input
            type="text"
            id="identity"
            value={identity}
            onChange={e => setIdentity(e.target.value)}
          />
        </label>
        <label htmlfor="roomName">
          Display name:
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
          />
        </label>
      </form>
    </>
  )
}

export default Join
