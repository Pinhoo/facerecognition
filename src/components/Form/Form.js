import React from 'react';
import './Form.css'

const Form = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'Permite detectar caras nas fotografias que inserires'}
			</p>
			<div className='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input className = 'f4 pa2 w-65 center' type='text' onChange={onInputChange}/>
					<button className = 'w-35 grow f4 link ph3 pv2 dib white bg-black' onClick={onButtonSubmit} >Detectar</button>
				</div>
			</div>
		</div>
	)
}

export default Form;