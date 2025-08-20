import React, { useEffect, useState } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By tahirkhanji007@gmail.com
  TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  TTTT___________________TTTT_TT____TTTTT____TTT
  TTTT___________________TTTT_TT____TTTT____TTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TTT____TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TT____TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____T____TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT_________TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TTT____TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TTT____TTTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TTTT____TTT
  TTTTTTTTTT_______TTTTTTTTTT_TT____TTTT____TTT
  TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  `)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
