import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';
import logo192 from '../assets/logo192.png';

function ElevationScroll(props) {
	const { children } = props;

	// This is an event listener for when a user is scrolling
	const trigger = useScrollTrigger({
		// disables a delay of the floating app bar
		// the threshold shows how far the user should scroll for the effect to be reflected. Default =100
		disableHysteresis: true,
		threshold: 0,
	});
	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
	},
	tabContainer: {
		marginLeft: 'auto',
	},
}));

function Header(props) {
	const classes = useStyles();
	return (
		//   <React.Fragment>
		<ElevationScroll>
			<AppBar position='static' color='secondary'>
				<Toolbar disableGutters>
					{/* <Typography variant='h3'> Arc Development</Typography> */}
					<img alt='Shirwil' src={logo192} height='100' />
					<Tabs className={classes.tabContainer}>
						<Tab label='Home' />
						<Tab label='Services' />
						<Tab label='The Revolution' />
						<Tab label='About Us' />
						<Tab label='Contact Us' />
					</Tabs>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
		// <div />
		//  {/* </React.Fragment> */}
	);
}

export default Header;
