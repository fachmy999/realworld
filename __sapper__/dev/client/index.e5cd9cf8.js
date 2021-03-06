import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as noop } from './chunk.6414288c.js';

/* src/routes/profile/index.svelte generated by Svelte v3.12.1 */

function create_fragment(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function preload({ params }, { user }) {
	if (user) {
		this.redirect(302, `/profile/@${user.username}`);
	} else {
		this.redirect(302, `/`);
	}
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTVjZDljZjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvZmlsZS9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0sIHsgdXNlciB9KSB7XG5cdFx0aWYgKHVzZXIpIHtcblx0XHRcdHRoaXMucmVkaXJlY3QoMzAyLCBgL3Byb2ZpbGUvQCR7dXNlci51c2VybmFtZX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZWRpcmVjdCgzMDIsIGAvYCk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDUSxTQUFTLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7Q0FDN0MsSUFBSSxJQUFJLEVBQUU7RUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2pELE1BQU07RUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDeEI7Q0FDRDs7Ozs7Ozs7Ozs7OzsifQ==
