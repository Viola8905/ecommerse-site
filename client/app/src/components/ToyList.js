import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import ToyItem from './ToyItem'

const ToyList = observer(() => {
	const {toy} = useContext(Context)
	return ( 
		<div  style={{display:'flex'}}>
				{toy.toys.map(toy => 
					<ToyItem key={toy.id} toy={toy} />
					)}
		</div>
	)
})

export default ToyList