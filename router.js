import About from './src/pages/About.vue';
import Services from './src/pages/Services.vue';
import Team from './src/pages/Team.vue';
import Contact from './src/pages/Contact.vue';
import Landing from './src/pages/Landing.vue';

export default [
	// Redirects to '/' as the default route.
	{
		path: '/',
		component: Landing
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/services',
		component: Services
	},
	{
		path: '/contact',
		component: Contact
	},
	{
		path: '/team',
		component: Team
	}
];
