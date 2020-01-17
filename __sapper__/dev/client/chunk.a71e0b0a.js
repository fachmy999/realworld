import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, e as element, a as space, t as text, b as claim_element, f as children, h as detach_dev, j as claim_space, g as claim_text, k as attr_dev, l as add_location, K as listen_dev, o as insert_dev, p as append_dev, q as set_data_dev, u as mount_component, y as transition_in, z as transition_out, A as destroy_component, n as noop, C as empty, O as createEventDispatcher, L as destroy_each, P as binding_callbacks, Q as bind, R as onMount, T as add_flush_callback } from './chunk.6414288c.js';
import { a as stores$1 } from './chunk.78ecd290.js';
import { g as get } from './chunk.11f50e20.js';
import { A as ArticleList } from './chunk.52b8b945.js';

/* src/routes/_components/MainView/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/_components/MainView/index.svelte";

// (31:3) {:else}
function create_else_block(ctx) {
	var li, a, t;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text("Your Feed");
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t = claim_text(a_nodes, "Your Feed");
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a, "href", "/login");
			attr_dev(a, "class", "nav-link");
			add_location(a, file, 32, 5, 639);
			attr_dev(li, "class", "nav-item");
			add_location(li, file, 31, 4, 612);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block.name, type: "else", source: "(31:3) {:else}", ctx });
	return block;
}

// (25:3) {#if $session.user}
function create_if_block_1(ctx) {
	var li, a, t, a_class_value, dispose;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text("Your Feed");
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t = claim_text(a_nodes, "Your Feed");
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a, "href", ".");
			attr_dev(a, "class", a_class_value = "nav-link " + (ctx.tab === "feed" ? "active" : ""));
			add_location(a, file, 26, 5, 475);
			attr_dev(li, "class", "nav-item");
			add_location(li, file, 25, 4, 448);
			dispose = listen_dev(a, "click", ctx.yourFeed);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},

		p: function update(changed, ctx) {
			if ((changed.tab) && a_class_value !== (a_class_value = "nav-link " + (ctx.tab === "feed" ? "active" : ""))) {
				attr_dev(a, "class", a_class_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1.name, type: "if", source: "(25:3) {#if $session.user}", ctx });
	return block;
}

// (45:3) {#if tag}
function create_if_block(ctx) {
	var li, a, i, t0, t1, a_class_value, dispose;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			i = element("i");
			t0 = space();
			t1 = text(ctx.tag);
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			i = claim_element(a_nodes, "I", { class: true }, false);
			var i_nodes = children(i);

			i_nodes.forEach(detach_dev);
			t0 = claim_space(a_nodes);
			t1 = claim_text(a_nodes, ctx.tag);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(i, "class", "ion-pound");
			add_location(i, file, 47, 6, 1016);
			attr_dev(a, "href", ".");
			attr_dev(a, "class", a_class_value = "nav-link " + (ctx.tab === "tag" ? "active" : ""));
			add_location(a, file, 46, 5, 916);
			attr_dev(li, "class", "nav-item");
			add_location(li, file, 45, 4, 889);
			dispose = listen_dev(a, "click", ctx.click_handler);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, i);
			append_dev(a, t0);
			append_dev(a, t1);
		},

		p: function update(changed, ctx) {
			if (changed.tag) {
				set_data_dev(t1, ctx.tag);
			}

			if ((changed.tab) && a_class_value !== (a_class_value = "nav-link " + (ctx.tab === "tag" ? "active" : ""))) {
				attr_dev(a, "class", a_class_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(45:3) {#if tag}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div1, div0, ul, t0, li, a, t1, a_class_value, t2, t3, current, dispose;

	function select_block_type(changed, ctx) {
		if (ctx.$session.user) return create_if_block_1;
		return create_else_block;
	}

	var current_block_type = select_block_type(null, ctx);
	var if_block0 = current_block_type(ctx);

	var if_block1 = (ctx.tag) && create_if_block(ctx);

	var articlelist = new ArticleList({
		props: {
		p: ctx.p,
		tab: ctx.tab,
		tag: ctx.tag
	},
		$$inline: true
	});

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			ul = element("ul");
			if_block0.c();
			t0 = space();
			li = element("li");
			a = element("a");
			t1 = text("Global Feed");
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			articlelist.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			ul = claim_element(div0_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			if_block0.l(ul_nodes);
			t0 = claim_space(ul_nodes);

			li = claim_element(ul_nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			a = claim_element(li_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t1 = claim_text(a_nodes, "Global Feed");
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			t2 = claim_space(ul_nodes);
			if (if_block1) if_block1.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			articlelist.$$.fragment.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a, "href", ".");
			attr_dev(a, "class", a_class_value = "nav-link " + (ctx.tab === "all" ? "active" : ""));
			add_location(a, file, 39, 4, 749);
			attr_dev(li, "class", "nav-item");
			add_location(li, file, 38, 3, 723);
			attr_dev(ul, "class", "nav nav-pills outline-active");
			add_location(ul, file, 23, 2, 379);
			attr_dev(div0, "class", "feed-toggle");
			add_location(div0, file, 22, 1, 351);
			attr_dev(div1, "class", "col-md-9");
			add_location(div1, file, 21, 0, 327);
			dispose = listen_dev(a, "click", ctx.globalfeed);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, ul);
			if_block0.m(ul, null);
			append_dev(ul, t0);
			append_dev(ul, li);
			append_dev(li, a);
			append_dev(a, t1);
			append_dev(ul, t2);
			if (if_block1) if_block1.m(ul, null);
			append_dev(div1, t3);
			mount_component(articlelist, div1, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block0) {
				if_block0.p(changed, ctx);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);
				if (if_block0) {
					if_block0.c();
					if_block0.m(ul, t0);
				}
			}

			if ((!current || changed.tab) && a_class_value !== (a_class_value = "nav-link " + (ctx.tab === "all" ? "active" : ""))) {
				attr_dev(a, "class", a_class_value);
			}

			if (ctx.tag) {
				if (if_block1) {
					if_block1.p(changed, ctx);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(ul, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			var articlelist_changes = {};
			if (changed.p) articlelist_changes.p = ctx.p;
			if (changed.tab) articlelist_changes.tab = ctx.tab;
			if (changed.tag) articlelist_changes.tag = ctx.tag;
			articlelist.$set(articlelist_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(articlelist.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(articlelist.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div1);
			}

			if_block0.d();
			if (if_block1) if_block1.d();

			destroy_component(articlelist);

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $session;

	

	let { tab = 'all', tag = null, p } = $$props;

	const { session } = stores$1(); validate_store(session, 'session'); component_subscribe($$self, session, $$value => { $session = $$value; $$invalidate('$session', $session); });

	function yourFeed() {
		$$invalidate('tab', tab = "feed");
		$$invalidate('tag', tag = null);
	}

	function globalfeed() {
		$$invalidate('tab', tab = "all");
		$$invalidate('tag', tag = null);
	}

	const writable_props = ['tab', 'tag', 'p'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Index> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate('tab', tab = "tag");

	$$self.$set = $$props => {
		if ('tab' in $$props) $$invalidate('tab', tab = $$props.tab);
		if ('tag' in $$props) $$invalidate('tag', tag = $$props.tag);
		if ('p' in $$props) $$invalidate('p', p = $$props.p);
	};

	$$self.$capture_state = () => {
		return { tab, tag, p, $session };
	};

	$$self.$inject_state = $$props => {
		if ('tab' in $$props) $$invalidate('tab', tab = $$props.tab);
		if ('tag' in $$props) $$invalidate('tag', tag = $$props.tag);
		if ('p' in $$props) $$invalidate('p', p = $$props.p);
		if ('$session' in $$props) session.set($session);
	};

	return {
		tab,
		tag,
		p,
		session,
		yourFeed,
		globalfeed,
		$session,
		click_handler
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["tab", "tag", "p"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.p === undefined && !('p' in props)) {
			console.warn("<Index> was created without expected prop 'p'");
		}
	}

	get tab() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tab(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tag() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tag(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get p() {
		throw new Error("<Index>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set p(value) {
		throw new Error("<Index>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/_components/Tags.svelte generated by Svelte v3.12.1 */

const file$1 = "src/routes/_components/Tags.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.tag = list[i];
	return child_ctx;
}

// (16:0) {:else}
function create_else_block$1(ctx) {
	var div, t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Loading Tags...");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			t = claim_text(div_nodes, "Loading Tags...");
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(div, file$1, 16, 1, 329);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block$1.name, type: "else", source: "(16:0) {:else}", ctx });
	return block;
}

// (8:0) {#if tags}
function create_if_block$1(ctx) {
	var div;

	let each_value = ctx.tags;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { className: true }, false);
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(div, "classname", "tag-list");
			add_location(div, file$1, 8, 1, 143);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.tags) {
				each_value = ctx.tags;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
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
				detach_dev(div);
			}

			destroy_each(each_blocks, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$1.name, type: "if", source: "(8:0) {#if tags}", ctx });
	return block;
}

// (10:2) {#each tags as tag}
function create_each_block(ctx) {
	var a, t0_value = ctx.tag + "", t0, t1, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	const block = {
		c: function create() {
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			t0 = claim_text(a_nodes, t0_value);
			t1 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a, "href", ".");
			attr_dev(a, "class", "tag-default tag-pill");
			add_location(a, file$1, 10, 3, 195);
			dispose = listen_dev(a, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t0);
			append_dev(a, t1);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.tags) && t0_value !== (t0_value = ctx.tag + "")) {
				set_data_dev(t0, t0_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(a);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(10:2) {#each tags as tag}", ctx });
	return block;
}

function create_fragment$1(ctx) {
	var if_block_anchor;

	function select_block_type(changed, ctx) {
		if (ctx.tags) return create_if_block$1;
		return create_else_block$1;
	}

	var current_block_type = select_block_type(null, ctx);
	var if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if (current_block_type === (current_block_type = select_block_type(changed, ctx)) && if_block) {
				if_block.p(changed, ctx);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);
				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if_block.d(detaching);

			if (detaching) {
				detach_dev(if_block_anchor);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$1.name, type: "component", source: "", ctx });
	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { tags } = $$props;
	const dispatch = createEventDispatcher();

	const writable_props = ['tags'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Tags> was created with unknown prop '${key}'`);
	});

	const click_handler = ({ tag }) => dispatch("select", { tag });

	$$self.$set = $$props => {
		if ('tags' in $$props) $$invalidate('tags', tags = $$props.tags);
	};

	$$self.$capture_state = () => {
		return { tags };
	};

	$$self.$inject_state = $$props => {
		if ('tags' in $$props) $$invalidate('tags', tags = $$props.tags);
	};

	return { tags, dispatch, click_handler };
}

class Tags extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["tags"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Tags", options, id: create_fragment$1.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.tags === undefined && !('tags' in props)) {
			console.warn("<Tags> was created without expected prop 'tags'");
		}
	}

	get tags() {
		throw new Error("<Tags>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tags(value) {
		throw new Error("<Tags>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/_components/Home.svelte generated by Svelte v3.12.1 */

const file$2 = "src/routes/_components/Home.svelte";

function create_fragment$2(ctx) {
	var t0, div6, div1, div0, h1, t1, t2, p0, t3, t4, div5, div4, updating_tab, t5, div3, div2, p1, t6, t7, current;

	function mainview_tab_binding(value) {
		ctx.mainview_tab_binding.call(null, value);
		updating_tab = true;
		add_flush_callback(() => updating_tab = false);
	}

	let mainview_props = { p: ctx.p, tag: ctx.tag };
	if (ctx.tab !== void 0) {
		mainview_props.tab = ctx.tab;
	}
	var mainview = new Index({ props: mainview_props, $$inline: true });

	binding_callbacks.push(() => bind(mainview, 'tab', mainview_tab_binding));

	var tags_1 = new Tags({
		props: { tags: ctx.tags },
		$$inline: true
	});
	tags_1.$on("select", ctx.setTags);

	const block = {
		c: function create() {
			t0 = space();
			div6 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("conduit");
			t2 = space();
			p0 = element("p");
			t3 = text("A place to share your knowledge.");
			t4 = space();
			div5 = element("div");
			div4 = element("div");
			mainview.$$.fragment.c();
			t5 = space();
			div3 = element("div");
			div2 = element("div");
			p1 = element("p");
			t6 = text("Popular Tags");
			t7 = space();
			tags_1.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div6 = claim_element(nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			div1 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h1 = claim_element(div0_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "conduit");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);

			p0 = claim_element(div0_nodes, "P", {}, false);
			var p0_nodes = children(p0);

			t3 = claim_text(p0_nodes, "A place to share your knowledge.");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div6_nodes);

			div5 = claim_element(div6_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			mainview.$$.fragment.l(div4_nodes);
			t5 = claim_space(div4_nodes);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			p1 = claim_element(div2_nodes, "P", {}, false);
			var p1_nodes = children(p1);

			t6 = claim_text(p1_nodes, "Popular Tags");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			tags_1.$$.fragment.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Conduit";
			attr_dev(h1, "class", "logo-font");
			add_location(h1, file$2, 29, 3, 490);
			add_location(p0, file$2, 30, 3, 528);
			attr_dev(div0, "class", "container");
			add_location(div0, file$2, 28, 2, 463);
			attr_dev(div1, "class", "banner");
			add_location(div1, file$2, 27, 1, 440);
			add_location(p1, file$2, 40, 5, 729);
			attr_dev(div2, "class", "sidebar");
			add_location(div2, file$2, 39, 4, 702);
			attr_dev(div3, "class", "col-md-3");
			add_location(div3, file$2, 38, 3, 675);
			attr_dev(div4, "class", "row");
			add_location(div4, file$2, 35, 2, 618);
			attr_dev(div5, "class", "container page");
			add_location(div5, file$2, 34, 1, 587);
			attr_dev(div6, "class", "home-page");
			add_location(div6, file$2, 26, 0, 415);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div6, t4);
			append_dev(div6, div5);
			append_dev(div5, div4);
			mount_component(mainview, div4, null);
			append_dev(div4, t5);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, p1);
			append_dev(p1, t6);
			append_dev(div2, t7);
			mount_component(tags_1, div2, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var mainview_changes = {};
			if (changed.p) mainview_changes.p = ctx.p;
			if (changed.tag) mainview_changes.tag = ctx.tag;
			if (!updating_tab && changed.tab) {
				mainview_changes.tab = ctx.tab;
			}
			mainview.$set(mainview_changes);

			var tags_1_changes = {};
			if (changed.tags) tags_1_changes.tags = ctx.tags;
			tags_1.$set(tags_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(mainview.$$.fragment, local);

			transition_in(tags_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(mainview.$$.fragment, local);
			transition_out(tags_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div6);
			}

			destroy_component(mainview);

			destroy_component(tags_1);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$2.name, type: "component", source: "", ctx });
	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	

	let { p = 1 } = $$props;

	let tab;
	let tag;
	let tags;

	function setTags({ detail }) {
		$$invalidate('tag', tag = detail.tag);
		$$invalidate('tab', tab = "tag");
	}

	onMount(async () => {
		($$invalidate('tags', { tags } = await get('tags'), tags));
	});

	const writable_props = ['p'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Home> was created with unknown prop '${key}'`);
	});

	function mainview_tab_binding(value) {
		tab = value;
		$$invalidate('tab', tab);
	}

	$$self.$set = $$props => {
		if ('p' in $$props) $$invalidate('p', p = $$props.p);
	};

	$$self.$capture_state = () => {
		return { p, tab, tag, tags };
	};

	$$self.$inject_state = $$props => {
		if ('p' in $$props) $$invalidate('p', p = $$props.p);
		if ('tab' in $$props) $$invalidate('tab', tab = $$props.tab);
		if ('tag' in $$props) $$invalidate('tag', tag = $$props.tag);
		if ('tags' in $$props) $$invalidate('tags', tags = $$props.tags);
	};

	return {
		p,
		tab,
		tag,
		tags,
		setTags,
		mainview_tab_binding
	};
}

class Home extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["p"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Home", options, id: create_fragment$2.name });
	}

	get p() {
		throw new Error("<Home>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set p(value) {
		throw new Error("<Home>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Home as H };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmsuYTcxZTBiMGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2NvbXBvbmVudHMvTWFpblZpZXcvaW5kZXguc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fY29tcG9uZW50cy9UYWdzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2NvbXBvbmVudHMvSG9tZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgc3RvcmVzIH0gZnJvbSAnQHNhcHBlci9hcHAnO1xuXHRpbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSAnLi4vQXJ0aWNsZUxpc3QvaW5kZXguc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHRhYiA9ICdhbGwnO1xuXHRleHBvcnQgbGV0IHRhZyA9IG51bGw7XG5cdGV4cG9ydCBsZXQgcDtcblxuXHRjb25zdCB7IHNlc3Npb24gfSA9IHN0b3JlcygpO1xuXG5cdGZ1bmN0aW9uIHlvdXJGZWVkKCkge1xuXHRcdHRhYiA9IFwiZmVlZFwiO1xuXHRcdHRhZyA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnbG9iYWxmZWVkKCkge1xuXHRcdHRhYiA9IFwiYWxsXCI7XG5cdFx0dGFnID0gbnVsbDtcblx0fVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuXHQ8ZGl2IGNsYXNzPVwiZmVlZC10b2dnbGVcIj5cblx0XHQ8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzIG91dGxpbmUtYWN0aXZlXCI+XG5cdFx0XHR7I2lmICRzZXNzaW9uLnVzZXJ9XG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIi5cIiBjbGFzcz0nbmF2LWxpbmsge3RhYiA9PT0gXCJmZWVkXCIgPyBcImFjdGl2ZVwiIDogXCJcIiB9JyBvbjpjbGljaz0ne3lvdXJGZWVkfSc+XG5cdFx0XHRcdFx0XHRZb3VyIEZlZWRcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR7OmVsc2V9XG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIi9sb2dpblwiIGNsYXNzPSduYXYtbGluayc+XG5cdFx0XHRcdFx0XHRZb3VyIEZlZWRcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHR7L2lmfVxuXG5cdFx0XHQ8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHQ8YSBocmVmPVwiLlwiIGNsYXNzPSduYXYtbGluayB7dGFiID09PSBcImFsbFwiID8gXCJhY3RpdmVcIiA6IFwiXCIgfScgb246Y2xpY2s9J3tnbG9iYWxmZWVkfSc+XG5cdFx0XHRcdFx0R2xvYmFsIEZlZWRcblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9saT5cblxuXHRcdFx0eyNpZiB0YWd9XG5cdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIi5cIiBjbGFzcz0nbmF2LWxpbmsge3RhYiA9PT0gXCJ0YWdcIiA/IFwiYWN0aXZlXCIgOiBcIlwiIH0nIG9uOmNsaWNrPSd7KCkgPT4gdGFiID0gXCJ0YWdcIn0nPlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJpb24tcG91bmRcIj48L2k+IHt0YWd9XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0ey9pZn1cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cblxuXHQ8QXJ0aWNsZUxpc3Qge3B9IHt0YWJ9IHt0YWd9Lz5cbjwvZGl2PiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCB0YWdzO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuPC9zY3JpcHQ+XG5cbnsjaWYgdGFnc31cblx0PGRpdiBjbGFzc05hbWU9XCJ0YWctbGlzdFwiPlxuXHRcdHsjZWFjaCB0YWdzIGFzIHRhZ31cblx0XHRcdDxhIGhyZWY9XCIuXCIgY2xhc3M9XCJ0YWctZGVmYXVsdCB0YWctcGlsbFwiIG9uOmNsaWNrPSd7KCkgPT4gZGlzcGF0Y2goXCJzZWxlY3RcIiwgeyB0YWcgfSl9Jz5cblx0XHRcdFx0e3RhZ31cblx0XHRcdDwvYT5cblx0XHR7L2VhY2h9XG5cdDwvZGl2PlxuezplbHNlfVxuXHQ8ZGl2PkxvYWRpbmcgVGFncy4uLjwvZGl2Plxuey9pZn0iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IE1haW5WaWV3IGZyb20gJy4vTWFpblZpZXcvaW5kZXguc3ZlbHRlJztcblx0aW1wb3J0IFRhZ3MgZnJvbSAnLi9UYWdzLnN2ZWx0ZSc7XG5cdGltcG9ydCAqIGFzIGFwaSBmcm9tICdhcGkuanMnO1xuXG5cdGV4cG9ydCBsZXQgcCA9IDE7XG5cblx0bGV0IHRhYjtcblx0bGV0IHRhZztcblx0bGV0IHRhZ3M7XG5cblx0ZnVuY3Rpb24gc2V0VGFncyh7IGRldGFpbCB9KSB7XG5cdFx0dGFnID0gZGV0YWlsLnRhZztcblx0XHR0YWIgPSBcInRhZ1wiO1xuXHR9XG5cblx0b25Nb3VudChhc3luYyAoKSA9PiB7XG5cdFx0KHsgdGFncyB9ID0gYXdhaXQgYXBpLmdldCgndGFncycpKTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q29uZHVpdDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiaG9tZS1wYWdlXCI+XG5cdDxkaXYgY2xhc3M9XCJiYW5uZXJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8aDEgY2xhc3M9XCJsb2dvLWZvbnRcIj5jb25kdWl0PC9oMT5cblx0XHRcdDxwPkEgcGxhY2UgdG8gc2hhcmUgeW91ciBrbm93bGVkZ2UuPC9wPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHBhZ2VcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8TWFpblZpZXcge3B9IHt0YWd9IGJpbmQ6dGFiIC8+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhclwiPlxuXHRcdFx0XHRcdDxwPlBvcHVsYXIgVGFnczwvcD5cblx0XHRcdFx0XHQ8VGFncyB7dGFnc30gb246c2VsZWN0PSd7c2V0VGFnc30nIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbInN0b3JlcyIsImFwaS5nZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREEwQmtDLEdBQUcsS0FBSyxNQUFNLEdBQUcsUUFBUSxHQUFHLEVBQUU7Ozs7d0NBQWUsUUFBUTs7Ozs7Ozs7Ozs4RUFBckQsR0FBRyxLQUFLLE1BQU0sR0FBRyxRQUFRLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQXFCL0IsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FBSCxHQUFHOzs7Ozs7Ozs7OzJEQURGLEdBQUcsS0FBSyxLQUFLLEdBQUcsUUFBUSxHQUFHLEVBQUU7Ozs7b0NBQWU7Ozs7Ozs7Ozs7Ozs7eUJBQzdDLEdBQUc7Ozs4RUFERixHQUFHLEtBQUssS0FBSyxHQUFHLFFBQVEsR0FBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF0QnZELFFBQVEsQ0FBQyxJQUFJOzs7Ozs7O3NCQW9CYixHQUFHOzs7O1NBVUksQ0FBQztXQUFHLEdBQUc7V0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFmSyxHQUFHLEtBQUssS0FBSyxHQUFHLFFBQVEsR0FBRyxFQUFFOzs7Ozs7Ozs7O3dDQUFlLFVBQVU7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
