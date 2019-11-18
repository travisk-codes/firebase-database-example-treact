import React from 'react'
import {
	Box,
	Button,
	Container,
	CssBaseline,
	Typography,
} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './App.css'

const App: React.FC = () => {
	const mdl = (
		<div className='layout__container'>
			<section id='splash-page'>
				<h3 className='logo'>
					Treact Firebase Example Blog
				</h3>
				<div>
					<button
						id='sign-in-button'
						className='button button--raised'
					>
						Sign in with Google
					</button>
				</div>
			</section>
		</div>
	)
	const mui = (
		<>
			<CssBaseline />
			<Container maxWidth='sm'>
				<Box>
					<Typography variant='h3'>
						Treact Firebase Example Blog
					</Typography>
					<Button
						variant='contained'
						size='large'
						color='primary'
						startIcon={<AccountCircleIcon />}
					>
						Sign in with Google
					</Button>
				</Box>
			</Container>
		</>
	)
	return mui
}

export default App
