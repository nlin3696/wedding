import WeddingCake from './wedding-cake.svg'
export const styleCake = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate3d(-50%, -50%, 0) rotate(0deg)',
	width: '75%',
	height: '75%',
}

export function Cake() {
  return (
	<div>
		<WeddingCake />
		hi
	</div>
  )
}
