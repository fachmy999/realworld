import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_store, c as component_subscribe, e as element, a as space, t as text, b as claim_element, f as children, h as detach_dev, j as claim_space, g as claim_text, k as attr_dev, l as add_location, K as listen_dev, o as insert_dev, p as append_dev, q as set_data_dev, u as mount_component, V as set_input_value, Y as prop_dev, y as transition_in, z as transition_out, A as destroy_component, L as destroy_each, W as run_all } from './chunk.6414288c.js';
import { a as stores$1, g as goto } from './chunk.78ecd290.js';
import { a as put, p as post } from './chunk.11f50e20.js';
import { L as ListErrors } from './chunk.9e3350ae.js';

/* src/routes/editor/_Editor.svelte generated by Svelte v3.12.1 */

const file = "src/routes/editor/_Editor.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.tag = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (76:8) {#each article.tagList as tag, i}
function create_each_block(ctx) {
	var span, i_1, t0, t1_value = ctx.tag + "", t1, t2, dispose;

	function click_handler() {
		return ctx.click_handler(ctx);
	}

	const block = {
		c: function create() {
			span = element("span");
			i_1 = element("i");
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},

		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			i_1 = claim_element(span_nodes, "I", { class: true }, false);
			var i_1_nodes = children(i_1);

			i_1_nodes.forEach(detach_dev);
			t0 = claim_space(span_nodes);
			t1 = claim_text(span_nodes, t1_value);
			t2 = claim_space(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(i_1, "class", "ion-close-round");
			add_location(i_1, file, 77, 10, 2062);
			attr_dev(span, "class", "tag-default tag-pill");
			add_location(span, file, 76, 9, 2016);
			dispose = listen_dev(i_1, "click", click_handler);
		},

		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, i_1);
			append_dev(span, t0);
			append_dev(span, t1);
			append_dev(span, t2);
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			if ((changed.article) && t1_value !== (t1_value = ctx.tag + "")) {
				set_data_dev(t1, t1_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(span);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(76:8) {#each article.tagList as tag, i}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div4, div3, div2, div1, t0, form, fieldset4, fieldset0, input0, t1, fieldset1, input1, t2, fieldset2, textarea, t3, fieldset3, input2, enter_action, t4, div0, t5, button, t6, current, dispose;

	var listerrors = new ListErrors({
		props: { errors: ctx.errors },
		$$inline: true
	});

	let each_value = ctx.article.tagList;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			listerrors.$$.fragment.c();
			t0 = space();
			form = element("form");
			fieldset4 = element("fieldset");
			fieldset0 = element("fieldset");
			input0 = element("input");
			t1 = space();
			fieldset1 = element("fieldset");
			input1 = element("input");
			t2 = space();
			fieldset2 = element("fieldset");
			textarea = element("textarea");
			t3 = space();
			fieldset3 = element("fieldset");
			input2 = element("input");
			t4 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			button = element("button");
			t6 = text("Publish Article");
			this.h();
		},

		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			listerrors.$$.fragment.l(div1_nodes);
			t0 = claim_space(div1_nodes);

			form = claim_element(div1_nodes, "FORM", {}, false);
			var form_nodes = children(form);

			fieldset4 = claim_element(form_nodes, "FIELDSET", {}, false);
			var fieldset4_nodes = children(fieldset4);

			fieldset0 = claim_element(fieldset4_nodes, "FIELDSET", { class: true }, false);
			var fieldset0_nodes = children(fieldset0);

			input0 = claim_element(fieldset0_nodes, "INPUT", { class: true, type: true, placeholder: true }, false);
			var input0_nodes = children(input0);

			input0_nodes.forEach(detach_dev);
			fieldset0_nodes.forEach(detach_dev);
			t1 = claim_space(fieldset4_nodes);

			fieldset1 = claim_element(fieldset4_nodes, "FIELDSET", { class: true }, false);
			var fieldset1_nodes = children(fieldset1);

			input1 = claim_element(fieldset1_nodes, "INPUT", { class: true, type: true, placeholder: true }, false);
			var input1_nodes = children(input1);

			input1_nodes.forEach(detach_dev);
			fieldset1_nodes.forEach(detach_dev);
			t2 = claim_space(fieldset4_nodes);

			fieldset2 = claim_element(fieldset4_nodes, "FIELDSET", { class: true }, false);
			var fieldset2_nodes = children(fieldset2);

			textarea = claim_element(fieldset2_nodes, "TEXTAREA", { class: true, rows: true, placeholder: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach_dev);
			fieldset2_nodes.forEach(detach_dev);
			t3 = claim_space(fieldset4_nodes);

			fieldset3 = claim_element(fieldset4_nodes, "FIELDSET", { class: true }, false);
			var fieldset3_nodes = children(fieldset3);

			input2 = claim_element(fieldset3_nodes, "INPUT", { class: true, type: true, placeholder: true }, false);
			var input2_nodes = children(input2);

			input2_nodes.forEach(detach_dev);
			t4 = claim_space(fieldset3_nodes);

			div0 = claim_element(fieldset3_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			fieldset3_nodes.forEach(detach_dev);
			t5 = claim_space(fieldset4_nodes);

			button = claim_element(fieldset4_nodes, "BUTTON", { class: true, type: true, disabled: true }, false);
			var button_nodes = children(button);

			t6 = claim_text(button_nodes, "Publish Article");
			button_nodes.forEach(detach_dev);
			fieldset4_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(input0, "class", "form-control form-control-lg");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Article Title");
			add_location(input0, file, 60, 7, 1321);
			attr_dev(fieldset0, "class", "form-group");
			add_location(fieldset0, file, 59, 6, 1284);
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "type", "text");
			attr_dev(input1, "placeholder", "What's this article about?");
			add_location(input1, file, 64, 7, 1495);
			attr_dev(fieldset1, "class", "form-group");
			add_location(fieldset1, file, 63, 6, 1458);
			attr_dev(textarea, "class", "form-control");
			attr_dev(textarea, "rows", "8");
			attr_dev(textarea, "placeholder", "Write your article (in markdown)");
			add_location(textarea, file, 68, 7, 1672);
			attr_dev(fieldset2, "class", "form-group");
			add_location(fieldset2, file, 67, 6, 1635);
			attr_dev(input2, "class", "form-control");
			attr_dev(input2, "type", "text");
			attr_dev(input2, "placeholder", "Enter tags");
			add_location(input2, file, 72, 7, 1849);
			attr_dev(div0, "class", "tag-list");
			add_location(div0, file, 74, 7, 1942);
			attr_dev(fieldset3, "class", "form-group");
			add_location(fieldset3, file, 71, 6, 1812);
			attr_dev(button, "class", "btn btn-lg pull-xs-right btn-primary");
			attr_dev(button, "type", "button");
			button.disabled = ctx.inProgress;
			add_location(button, file, 84, 6, 2208);
			add_location(fieldset4, file, 58, 5, 1267);
			add_location(form, file, 57, 4, 1255);
			attr_dev(div1, "class", "col-md-10 offset-md-1 col-xs-12");
			add_location(div1, file, 54, 3, 1177);
			attr_dev(div2, "class", "row");
			add_location(div2, file, 53, 2, 1156);
			attr_dev(div3, "class", "container page");
			add_location(div3, file, 52, 1, 1125);
			attr_dev(div4, "class", "editor-page");
			add_location(div4, file, 51, 0, 1098);

			dispose = [
				listen_dev(input0, "input", ctx.input0_input_handler),
				listen_dev(input1, "input", ctx.input1_input_handler),
				listen_dev(textarea, "input", ctx.textarea_input_handler),
				listen_dev(button, "click", ctx.publish)
			];
		},

		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			mount_component(listerrors, div1, null);
			append_dev(div1, t0);
			append_dev(div1, form);
			append_dev(form, fieldset4);
			append_dev(fieldset4, fieldset0);
			append_dev(fieldset0, input0);

			set_input_value(input0, ctx.article.title);

			append_dev(fieldset4, t1);
			append_dev(fieldset4, fieldset1);
			append_dev(fieldset1, input1);

			set_input_value(input1, ctx.article.description);

			append_dev(fieldset4, t2);
			append_dev(fieldset4, fieldset2);
			append_dev(fieldset2, textarea);

			set_input_value(textarea, ctx.article.body);

			append_dev(fieldset4, t3);
			append_dev(fieldset4, fieldset3);
			append_dev(fieldset3, input2);
			enter_action = enter.call(null, input2, ctx.addTag) || {};
			append_dev(fieldset3, t4);
			append_dev(fieldset3, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(fieldset4, t5);
			append_dev(fieldset4, button);
			append_dev(button, t6);
			current = true;
		},

		p: function update(changed, ctx) {
			if (changed.article && (input0.value !== ctx.article.title)) set_input_value(input0, ctx.article.title);
			if (changed.article && (input1.value !== ctx.article.description)) set_input_value(input1, ctx.article.description);
			if (changed.article) set_input_value(textarea, ctx.article.body);

			if (changed.article) {
				each_value = ctx.article.tagList;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			if (!current || changed.inProgress) {
				prop_dev(button, "disabled", ctx.inProgress);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(listerrors.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(listerrors.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div4);
			}

			destroy_component(listerrors);

			if (enter_action && typeof enter_action.destroy === 'function') enter_action.destroy();

			destroy_each(each_blocks, detaching);

			run_all(dispose);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function enter(node, callback) {
	function onkeydown(event) {
		if (event.which === 13) callback(node);
	}

	node.addEventListener('keydown', onkeydown);

	return {
		destroy() {
			node.removeEventListener('keydown', onkeydown);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $session;

	

	let { article, slug } = $$props;

	let inProgress = false;
	let errors;

	const { session } = stores$1(); validate_store(session, 'session'); component_subscribe($$self, session, $$value => { $session = $$value; $$invalidate('$session', $session); });

	function addTag(input) {
		$$invalidate('article', article.tagList = [...article.tagList, input.value], article);
		input.value = '';
	}

	function remove(index) {
		$$invalidate('article', article.tagList = [...article.tagList.slice(0, index), ...article.tagList.slice(index + 1)], article);
	}

	async function publish() {
		$$invalidate('inProgress', inProgress = true);

		const response = await (slug
			? put(`articles/${slug}`, { article }, $session.user && $session.user.token)
			: post('articles', { article }, $session.user && $session.user.token));

		if (response.article) {
			goto(`/article/${response.article.slug}`);
		}

		$$invalidate('inProgress', inProgress = false);
	}

	const writable_props = ['article', 'slug'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Editor> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		article.title = this.value;
		$$invalidate('article', article);
	}

	function input1_input_handler() {
		article.description = this.value;
		$$invalidate('article', article);
	}

	function textarea_input_handler() {
		article.body = this.value;
		$$invalidate('article', article);
	}

	const click_handler = ({ i }) => remove(i);

	$$self.$set = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
	};

	$$self.$capture_state = () => {
		return { article, slug, inProgress, errors, $session };
	};

	$$self.$inject_state = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('inProgress' in $$props) $$invalidate('inProgress', inProgress = $$props.inProgress);
		if ('errors' in $$props) $$invalidate('errors', errors = $$props.errors);
		if ('$session' in $$props) session.set($session);
	};

	return {
		article,
		slug,
		inProgress,
		errors,
		session,
		addTag,
		remove,
		publish,
		input0_input_handler,
		input1_input_handler,
		textarea_input_handler,
		click_handler
	};
}

class Editor extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["article", "slug"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Editor", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.article === undefined && !('article' in props)) {
			console.warn("<Editor> was created without expected prop 'article'");
		}
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<Editor> was created without expected prop 'slug'");
		}
	}

	get article() {
		throw new Error("<Editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<Editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Editor>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Editor>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Editor as E };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmsuN2VhODE5OWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZWRpdG9yL19FZGl0b3Iuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdvdG8sIHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcblx0aW1wb3J0IExpc3RFcnJvcnMgZnJvbSAnLi4vX2NvbXBvbmVudHMvTGlzdEVycm9ycy5zdmVsdGUnO1xuXHRpbXBvcnQgKiBhcyBhcGkgZnJvbSAnYXBpLmpzJztcblxuXHRleHBvcnQgbGV0IGFydGljbGU7XG5cdGV4cG9ydCBsZXQgc2x1ZztcblxuXHRsZXQgaW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRsZXQgZXJyb3JzO1xuXG5cdGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XG5cblx0ZnVuY3Rpb24gYWRkVGFnKGlucHV0KSB7XG5cdFx0YXJ0aWNsZS50YWdMaXN0ID0gWy4uLmFydGljbGUudGFnTGlzdCwgaW5wdXQudmFsdWVdO1xuXHRcdGlucHV0LnZhbHVlID0gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcblx0XHRhcnRpY2xlLnRhZ0xpc3QgPSBbLi4uYXJ0aWNsZS50YWdMaXN0LnNsaWNlKDAsIGluZGV4KSwgLi4uYXJ0aWNsZS50YWdMaXN0LnNsaWNlKGluZGV4ICsgMSldO1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gcHVibGlzaCgpIHtcblx0XHRpblByb2dyZXNzID0gdHJ1ZTtcblxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKHNsdWdcblx0XHRcdD8gYXBpLnB1dChgYXJ0aWNsZXMvJHtzbHVnfWAsIHsgYXJ0aWNsZSB9LCAkc2Vzc2lvbi51c2VyICYmICRzZXNzaW9uLnVzZXIudG9rZW4pXG5cdFx0XHQ6IGFwaS5wb3N0KCdhcnRpY2xlcycsIHsgYXJ0aWNsZSB9LCAkc2Vzc2lvbi51c2VyICYmICRzZXNzaW9uLnVzZXIudG9rZW4pKTtcblxuXHRcdGlmIChyZXNwb25zZS5hcnRpY2xlKSB7XG5cdFx0XHRnb3RvKGAvYXJ0aWNsZS8ke3Jlc3BvbnNlLmFydGljbGUuc2x1Z31gKTtcblx0XHR9XG5cblx0XHRpblByb2dyZXNzID0gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBlbnRlcihub2RlLCBjYWxsYmFjaykge1xuXHRcdGZ1bmN0aW9uIG9ua2V5ZG93bihldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LndoaWNoID09PSAxMykgY2FsbGJhY2sobm9kZSk7XG5cdFx0fVxuXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25rZXlkb3duKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRkZXN0cm95KCkge1xuXHRcdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbmtleWRvd24pO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiZWRpdG9yLXBhZ2VcIj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYWdlXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSBjb2wteHMtMTJcIj5cblx0XHRcdFx0PExpc3RFcnJvcnMge2Vycm9yc30vPlxuXG5cdFx0XHRcdDxmb3JtPlxuXHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBcnRpY2xlIFRpdGxlXCIgYmluZDp2YWx1ZT17YXJ0aWNsZS50aXRsZX0+XG5cdFx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXG5cdFx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgdGhpcyBhcnRpY2xlIGFib3V0P1wiIGJpbmQ6dmFsdWU9e2FydGljbGUuZGVzY3JpcHRpb259PlxuXHRcdFx0XHRcdFx0PC9maWVsZHNldD5cblxuXHRcdFx0XHRcdFx0PGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiOFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBhcnRpY2xlIChpbiBtYXJrZG93bilcIiBiaW5kOnZhbHVlPXthcnRpY2xlLmJvZHl9Lz5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cblx0XHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhZ3NcIiB1c2U6ZW50ZXI9e2FkZFRhZ30+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhZy1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0eyNlYWNoIGFydGljbGUudGFnTGlzdCBhcyB0YWcsIGl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRhZy1kZWZhdWx0IHRhZy1waWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiaW9uLWNsb3NlLXJvdW5kXCIgb246Y2xpY2s9J3soKSA9PiByZW1vdmUoaSl9Jy8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0YWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIHB1bGwteHMtcmlnaHQgYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9IG9uOmNsaWNrPXtwdWJsaXNofT5cblx0XHRcdFx0XHRcdFx0UHVibGlzaCBBcnRpY2xlXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj4iXSwibmFtZXMiOlsic3RvcmVzIiwiYXBpLnB1dCIsImFwaS5wb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBOEVXLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FEa0M7Ozs7Ozs7Ozs7Ozs7eURBQ3JDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF2QkcsTUFBTTs7OztzQkFvQlIsT0FBTyxDQUFDLE9BQU87Ozs7Z0NBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQVN5RSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBWSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OytCQXhCVCxPQUFPLENBQUMsS0FBSzs7Ozs7OytCQUloQixPQUFPLENBQUMsV0FBVzs7Ozs7O2lDQUliLE9BQU8sQ0FBQyxJQUFJOzs7OzsrQ0FJbkMsTUFBTTs7OzttQ0FHL0U7Ozs7Ozs7Ozs7O2dEQWY2RixPQUFPLENBQUMsS0FBSywrQkFBYixPQUFPLENBQUMsS0FBSztnREFJaEIsT0FBTyxDQUFDLFdBQVcsK0JBQW5CLE9BQU8sQ0FBQyxXQUFXO3NEQUliLE9BQU8sQ0FBQyxJQUFJOzs7cUJBT3ZHLE9BQU8sQ0FBQyxPQUFPOzs7K0JBQXBCOzs7Ozs7Ozs7Ozs7MkJBQUE7OztnQkFBQSxvQkFBQTs7OztxQ0FTeUUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhENUYsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtDQUM5QixTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7RUFDekIsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDdkM7O0NBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzs7Q0FFNUMsT0FBTztFQUNOLE9BQU8sR0FBRztHQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDL0M7RUFDRCxDQUFDO0NBQ0Y7Ozs7Ozs7Q0EzQ00sTUFBSSxPQUFPLEVBQ1AsZ0JBQUksQ0FBQzs7Q0FFaEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDO0NBQ3ZCLElBQUksTUFBTSxDQUFDOztDQUVYLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBR0EsUUFBTSxvSkFBRSxDQUFDOztDQUU3QixTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7MEJBQ3RCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssV0FBQyxDQUFDO0VBQ3BELEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0VBQ2pCOztDQUVELFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTswQkFDdEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFDLENBQUM7RUFDNUY7O0NBRUQsZUFBZSxPQUFPLEdBQUc7NkJBQ3hCLFVBQVUsR0FBRyxLQUFJLENBQUM7O0VBRWxCLE1BQU0sUUFBUSxHQUFHLE9BQU8sSUFBSTtLQUN6QkMsR0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzlFQyxJQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0VBRTVFLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtHQUNyQixJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDMUM7OzZCQUVELFVBQVUsR0FBRyxNQUFLLENBQUM7RUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
