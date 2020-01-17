import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, b as claim_element, f as children, h as detach_dev, k as attr_dev, l as add_location, o as insert_dev, L as destroy_each, t as text, a as space, g as claim_text, j as claim_space, p as append_dev, q as set_data_dev, C as empty, n as noop } from './chunk.6414288c.js';

/* src/routes/_components/ListErrors.svelte generated by Svelte v3.12.1 */

const file = "src/routes/_components/ListErrors.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.key = list[i];
	return child_ctx;
}

// (5:0) {#if errors}
function create_if_block(ctx) {
	var ul;

	let each_value = Object.keys(ctx.errors);

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(ul, "class", "error-messages");
			add_location(ul, file, 5, 1, 54);
		},

		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.errors) {
				each_value = Object.keys(ctx.errors);

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(ul);
			}

			destroy_each(each_blocks, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(5:0) {#if errors}", ctx });
	return block;
}

// (7:2) {#each Object.keys(errors) as key}
function create_each_block(ctx) {
	var li, t0_value = ctx.key + "", t0, t1, t2_value = ctx.errors[ctx.key] + "", t2;

	const block = {
		c: function create() {
			li = element("li");
			t0 = text(t0_value);
			t1 = space();
			t2 = text(t2_value);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {}, false);
			var li_nodes = children(li);

			t0 = claim_text(li_nodes, t0_value);
			t1 = claim_space(li_nodes);
			t2 = claim_text(li_nodes, t2_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(li, file, 7, 3, 122);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t0);
			append_dev(li, t1);
			append_dev(li, t2);
		},

		p: function update(changed, ctx) {
			if ((changed.errors) && t0_value !== (t0_value = ctx.key + "")) {
				set_data_dev(t0, t0_value);
			}

			if ((changed.errors) && t2_value !== (t2_value = ctx.errors[ctx.key] + "")) {
				set_data_dev(t2, t2_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(7:2) {#each Object.keys(errors) as key}", ctx });
	return block;
}

function create_fragment(ctx) {
	var if_block_anchor;

	var if_block = (ctx.errors) && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (ctx.errors) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach_dev(if_block_anchor);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { errors } = $$props;

	const writable_props = ['errors'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ListErrors> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('errors' in $$props) $$invalidate('errors', errors = $$props.errors);
	};

	$$self.$capture_state = () => {
		return { errors };
	};

	$$self.$inject_state = $$props => {
		if ('errors' in $$props) $$invalidate('errors', errors = $$props.errors);
	};

	return { errors };
}

class ListErrors extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["errors"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "ListErrors", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.errors === undefined && !('errors' in props)) {
			console.warn("<ListErrors> was created without expected prop 'errors'");
		}
	}

	get errors() {
		throw new Error("<ListErrors>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set errors(value) {
		throw new Error("<ListErrors>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ListErrors as L };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmsuOWUzMzUwYWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2NvbXBvbmVudHMvTGlzdEVycm9ycy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBlcnJvcnM7XG48L3NjcmlwdD5cblxueyNpZiBlcnJvcnN9XG5cdDx1bCBjbGFzcz1cImVycm9yLW1lc3NhZ2VzXCI+XG5cdFx0eyNlYWNoIE9iamVjdC5rZXlzKGVycm9ycykgYXMga2V5fVxuXHRcdFx0PGxpPntrZXl9IHtlcnJvcnNba2V5XX08L2xpPlxuXHRcdHsvZWFjaH1cblx0PC91bD5cbnsvaWZ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBTVMsTUFBTSxDQUFDLElBQUksS0FBQyxNQUFNLENBQUM7Ozs7Z0NBQXhCOzs7Ozs7OzttQ0FBQTs7Ozs7Ozs7OzttQ0FBQTs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBQTs7Ozs7OztpQkFBSyxNQUFNLENBQUMsSUFBSSxLQUFDLE1BQU0sQ0FBQzs7OytCQUF4Qjs7Ozs7Ozs7Ozs7OzJCQUFBOzs7Z0JBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDSSxHQUFHLDhCQUFHLE1BQU0sS0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBQWpCLEdBQUc7Ozs7d0RBQUcsTUFBTSxLQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUhwQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBSEgsTUFBSSxrQkFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
