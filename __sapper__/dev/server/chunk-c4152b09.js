'use strict';

var __chunk_2 = require('./chunk-8b323fa8.js');

/* src/routes/_components/ListErrors.svelte generated by Svelte v3.12.1 */

const ListErrors = __chunk_2.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { errors } = $$props;

	if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0) $$bindings.errors(errors);

	return `${ errors ? `<ul class="error-messages">
			${__chunk_2.each(Object.keys(errors), (key) => `<li>${__chunk_2.escape(key)} ${__chunk_2.escape(errors[key])}</li>`)}
		</ul>` : `` }`;
});

exports.ListErrors = ListErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstYzQxNTJiMDkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2NvbXBvbmVudHMvTGlzdEVycm9ycy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBlcnJvcnM7XG48L3NjcmlwdD5cblxueyNpZiBlcnJvcnN9XG5cdDx1bCBjbGFzcz1cImVycm9yLW1lc3NhZ2VzXCI+XG5cdFx0eyNlYWNoIE9iamVjdC5rZXlzKGVycm9ycykgYXMga2V5fVxuXHRcdFx0PGxpPntrZXl9IHtlcnJvcnNba2V5XX08L2xpPlxuXHRcdHsvZWFjaH1cblx0PC91bD5cbnsvaWZ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Q0FDUSxNQUFJLGtCQUFNLENBQUM7Ozs7WUFHZCxNQUFNO29CQUVGLG1CQUFtQixHQUFJLEdBQUcsNkJBQzNCLEdBQUcsc0JBQUcsV0FBVzs7Ozs7OyJ9