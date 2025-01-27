// import { Cake, styleCake } from './Cake.js'
import { Container, TopMiddle, h1, BottomLeft,
	BottomRight, TopRight, p
 } from './styles.js'

export default function Overlay() {



  return (
	<div style={Container}>
	  <div style={TopMiddle}>
			<h1 style={h1}>
			Wedding
			<p style={p}>Of</p>
			Noah & Kennedii
			</h1>
			<p style={p}>Coming in 2027</p>
		</div>
		<div style={BottomLeft}>
		</div>
		<div style={BottomRight}>
			Made with React, React Three Fiber
			<br />
			By Noah
			<br />
		</div>
		<div style={TopRight}>

		</div>
		{/* <Cake style={styleCake} /> */}
	</div>
  )
}
