import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import auth from './auth';
import device from './device';
import home from './home';
import dashboard from './dashboard';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));
	
	// mount the auth resource
	api.use('/auth', auth({ config, db }));

	api.use('/device', device({ config, db }));
        
	api.use('/home', home({ config, db }));
        
	api.use('/dashboard', dashboard({ config, db }));
        
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
