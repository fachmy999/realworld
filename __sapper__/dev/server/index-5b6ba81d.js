'use strict';

var __chunk_2 = require('./chunk-8b323fa8.js');
var __chunk_3 = require('./chunk-d846850b.js');
var __chunk_6 = require('./chunk-c4152b09.js');

/* src/routes/register/index.svelte generated by Svelte v3.12.1 */

const Index = __chunk_2.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $session;

	

	const { session } = __chunk_3.stores$1(); __chunk_2.validate_store(session, 'session'); $session = __chunk_2.get_store_value(session);

	let username = '';
	let email = '';
	let password = '';
	let errors = null;

	__chunk_2.validate_store(session, 'session'); $session = __chunk_2.get_store_value(session);

	return `${($$result.head += `<title>Sign up • Conduit</title>`, "")}

	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Sign up</h1>
					<p class="text-xs-center">
						<a href="/login">Have an account?</a>
					</p>

					${__chunk_2.validate_component(__chunk_6.ListErrors, 'ListErrors').$$render($$result, { errors: errors }, {}, {})}

					<form>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="text" placeholder="Your Name"${__chunk_2.add_attribute("value", username, 1)}>
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="text" placeholder="Email"${__chunk_2.add_attribute("value", email, 1)}>
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="password" placeholder="Password"${__chunk_2.add_attribute("value", password, 1)}>
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right">
							Sign up
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>`;
});

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtNWI2YmE4MWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdvdG8sIHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcblx0aW1wb3J0IExpc3RFcnJvcnMgZnJvbSAnLi4vX2NvbXBvbmVudHMvTGlzdEVycm9ycy5zdmVsdGUnO1xuXHRpbXBvcnQgeyBwb3N0IH0gZnJvbSAndXRpbHMuanMnO1xuXG5cdGNvbnN0IHsgc2Vzc2lvbiB9ID0gc3RvcmVzKCk7XG5cblx0bGV0IHVzZXJuYW1lID0gJyc7XG5cdGxldCBlbWFpbCA9ICcnO1xuXHRsZXQgcGFzc3dvcmQgPSAnJztcblx0bGV0IGVycm9ycyA9IG51bGw7XG5cblx0YXN5bmMgZnVuY3Rpb24gc3VibWl0KGV2ZW50KSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KGBhdXRoL3JlZ2lzdGVyYCwgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuXG5cdFx0Ly8gVE9ETyBoYW5kbGUgbmV0d29yayBlcnJvcnNcblx0XHRlcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG5cblx0XHRpZiAocmVzcG9uc2UudXNlcikge1xuXHRcdFx0JHNlc3Npb24udXNlciA9IHJlc3BvbnNlLnVzZXI7XG5cdFx0XHRnb3RvKCcvJyk7XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2lnbiB1cCDigKIgQ29uZHVpdDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiYXV0aC1wYWdlXCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGFnZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBvZmZzZXQtbWQtMyBjb2wteHMtMTJcIj5cblx0XHRcdFx0PGgxIGNsYXNzPVwidGV4dC14cy1jZW50ZXJcIj5TaWduIHVwPC9oMT5cblx0XHRcdFx0PHAgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvbG9naW5cIj5IYXZlIGFuIGFjY291bnQ/PC9hPlxuXHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0PExpc3RFcnJvcnMge2Vycm9yc30vPlxuXG5cdFx0XHRcdDxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17c3VibWl0fT5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIGJpbmQ6dmFsdWU9e3VzZXJuYW1lfT5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBiaW5kOnZhbHVlPXtlbWFpbH0+XG5cdFx0XHRcdFx0PC9maWVsZHNldD5cblx0XHRcdFx0XHQ8ZmllbGRzZXQgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfT5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHB1bGwteHMtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFNpZ24gdXBcblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbInN0b3JlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUtDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBR0Esa0JBQU0sK0ZBQUUsQ0FBQzs7Q0FFN0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0NBQ2xCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztDQUNmLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztDQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7OztxR0E0QkYsTUFBTTs7Ozt5SEFJMkUsUUFBUTs7O3FIQUdaLEtBQUs7Ozs0SEFHRSxRQUFROzs7Ozs7Ozs7Ozs7OzsifQ==
