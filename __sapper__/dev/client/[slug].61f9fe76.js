import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, u as mount_component, y as transition_in, z as transition_out, A as destroy_component } from './chunk.6414288c.js';
import './chunk.78ecd290.js';
import { g as get } from './chunk.11f50e20.js';
import './chunk.9e3350ae.js';
import { E as Editor } from './chunk.7ea8199f.js';

/* src/routes/editor/[slug].svelte generated by Svelte v3.12.1 */

function create_fragment(ctx) {
	var current;

	var editor = new Editor({
		props: { article: ctx.article, slug: ctx.slug },
		$$inline: true
	});

	const block = {
		c: function create() {
			editor.$$.fragment.c();
		},

		l: function claim(nodes) {
			editor.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(editor, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var editor_changes = {};
			if (changed.article) editor_changes.article = ctx.article;
			if (changed.slug) editor_changes.slug = ctx.slug;
			editor.$set(editor_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(editor.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(editor.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(editor, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

async function preload({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${slug}`, null);
	return { article, slug };
}

function instance($$self, $$props, $$invalidate) {
	let { slug, article } = $$props;

	const writable_props = ['slug', 'article'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Slug> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
	};

	$$self.$capture_state = () => {
		return { slug, article };
	};

	$$self.$inject_state = $$props => {
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
	};

	return { slug, article };
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["slug", "article"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Slug", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<Slug> was created without expected prop 'slug'");
		}
		if (ctx.article === undefined && !('article' in props)) {
			console.warn("<Slug> was created without expected prop 'article'");
		}
	}

	get slug() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get article() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjYxZjlmZTc2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2VkaXRvci9bc2x1Z10uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgKiBhcyBhcGkgZnJvbSAnYXBpLmpzJztcblxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG5cdFx0Y29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG5cdFx0Y29uc3QgeyBhcnRpY2xlIH0gPSBhd2FpdCBhcGkuZ2V0KGBhcnRpY2xlcy8ke3NsdWd9YCwgbnVsbCk7XG5cdFx0cmV0dXJuIHsgYXJ0aWNsZSwgc2x1ZyB9O1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEVkaXRvciBmcm9tICcuL19FZGl0b3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHNsdWc7XG5cdGV4cG9ydCBsZXQgYXJ0aWNsZTtcbjwvc2NyaXB0PlxuXG48RWRpdG9yIHthcnRpY2xlfSB7c2x1Z30vPiJdLCJuYW1lcyI6WyJhcGkuZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBaUJTLE9BQU8sWUFBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFBZCxPQUFPOytDQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWRmLGVBQWUsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUU7Q0FDekMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQztDQUN4QixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTUEsR0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUN6Qjs7O0NBTU0sTUFBSSxJQUFJLEVBQ0osbUJBQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9