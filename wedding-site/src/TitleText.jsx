import { useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Float, Text } from '@react-three/drei'


export default function TitleText(props) {
    const topRef = useRef()
    const bottomRef = useRef()
    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 0])

  return <>
      <Float 
          speed={2}
          floatIntensity={2}
          rotationIntensity={2}
          floatingRange={[0.0, 0.3]}
          >            
          <Text 
              ref={topRef} 
              font='./bangers-v20-latin-regular.woff'
              fontSize={Math.min(width / 10, 0.5 )}
              color='coral'
              position-x={0}
              maxWidth={2}
              textAlign='center'

          >     Wedding of Noah & Kennedii
          </Text>
          <Text
              ref={bottomRef} 
              font='./bangers-v20-latin-regular.woff'
              fontSize={Math.max(Math.min(width * 0.04, 0.4), 0.2)}
              color='coral'
              position-y={-0.9}
              maxWidth={2}
              textAlign='center'

          >     coming in 2027
          </Text>
      </Float>
  </>
}


