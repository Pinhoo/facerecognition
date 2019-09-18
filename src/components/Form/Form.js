import React from 'react';
import './Form.css'

const Form = () => {
	return (
		<div>
			<p className='f3'>
				{'Isto permite detectar caras nas fotografias que inserires'}
			</p>
			<div className='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input className = 'f4 pa2 w-65 center' type='text'/>
					<button className = 'w-35 grow f4 link ph3 pv2 dib white bg-black'>Detectar</button>
				</div>
			</div>
		</div>
	)
}

export default Form;