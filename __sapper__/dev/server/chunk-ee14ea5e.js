'use strict';

require('./chunk-519a79ef.js');
var __chunk_2 = require('./chunk-8b323fa8.js');
require('./chunk-d846850b.js');
var __chunk_4 = require('./chunk-c49c56a1.js');

/* src/routes/profile/[user]/_Profile.svelte generated by Svelte v3.12.1 */

const Profile = __chunk_2.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { profile, favorites, user } = $$props;

	if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0) $$bindings.profile(profile);
	if ($$props.favorites === void 0 && $$bindings.favorites && favorites !== void 0) $$bindings.favorites(favorites);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);

	let isUser = user && (profile.username === user.username);

	return `${($$result.head += `<title>${__chunk_2.escape(profile.username)} • Conduit</title>`, "")}

	<div class="profile-page">
		<div class="user-info">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-10 offset-md-1">
						<img${__chunk_2.add_attribute("src", profile.image, 0)} class="user-img"${__chunk_2.add_attribute("alt", profile.username, 0)}>
						<h4>${__chunk_2.escape(profile.username)}</h4>
						<p>${__chunk_2.escape(profile.bio)}</p>

						${ isUser ? `<a href="/settings" class="btn btn-sm btn-outline-secondary action-btn">
								<i class="ion-gear-a"></i> Edit Profile Settings
							</a>` : `<button class="btn btn-sm action-btn ${__chunk_2.escape(profile.following ? "btn-secondary" : "btn-outline-secondary")}">
								<i class="ion-plus-round"></i>
								${__chunk_2.escape(profile.following ? 'Unfollow' : 'Follow')} ${__chunk_2.escape(profile.username)}
							</button>` }
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-10 offset-md-1">
					<div class="articles-toggle">
						<ul class="nav nav-pills outline-active">
							<li class="nav-item">
								<a href="/profile/@${__chunk_2.escape(profile.username)}" class="nav-link ${__chunk_2.escape(favorites ? '' : 'active')}">My Articles</a>
							</li>

							<li class="nav-item">
								<a class="nav-link ${__chunk_2.escape(favorites ? 'active' : '')}" href="/profile/@${__chunk_2.escape(profile.username)}/favorites">Favorited Articles</a>
							</li>
						</ul>
					</div>

					${__chunk_2.validate_component(__chunk_4.ArticleList, 'ArticleList').$$render($$result, {
		tab: "profile",
		username: profile.username,
		favorites: favorites
	}, {}, {})}
				</div>
			</div>
		</div>
	</div>`;
});

exports.Profile = Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstZWUxNGVhNWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvZmlsZS9bdXNlcl0vX1Byb2ZpbGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5cdGltcG9ydCBBcnRpY2xlTGlzdCBmcm9tICcuLi8uLi9fY29tcG9uZW50cy9BcnRpY2xlTGlzdC9pbmRleC5zdmVsdGUnO1xuXHRpbXBvcnQgKiBhcyBhcGkgZnJvbSAnYXBpLmpzJztcblxuXHRleHBvcnQgbGV0IHByb2ZpbGU7XG5cdGV4cG9ydCBsZXQgZmF2b3JpdGVzO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cblx0JDogaXNVc2VyID0gdXNlciAmJiAocHJvZmlsZS51c2VybmFtZSA9PT0gdXNlci51c2VybmFtZSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gdG9nZ2xlRm9sbG93aW5nKCkge1xuXHRcdGlmICghdXNlcikgcmV0dXJuIGdvdG8oJy9sb2dpbicpO1xuXG5cdFx0Ly8gb3B0aW1pc3RpYyBVSVxuXHRcdHByb2ZpbGUuZm9sbG93aW5nID0gIXByb2ZpbGUuZm9sbG93aW5nO1xuXG5cdFx0KHsgcHJvZmlsZSwgZmF2b3JpdGVzIH0gPSBhd2FpdCAocHJvZmlsZS5mb2xsb3dpbmdcblx0XHRcdD8gYXBpLnBvc3QoYHByb2ZpbGVzLyR7cHJvZmlsZS51c2VybmFtZX0vZm9sbG93YCwgbnVsbCwgdXNlciAmJiB1c2VyLnRva2VuKVxuXHRcdFx0OiBhcGkuZGVsKGBwcm9maWxlcy8ke3Byb2ZpbGUudXNlcm5hbWV9L2ZvbGxvd2AsIHVzZXIgJiYgdXNlci50b2tlbikpKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntwcm9maWxlLnVzZXJuYW1lfSDigKIgQ29uZHVpdDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwicHJvZmlsZS1wYWdlXCI+XG5cdDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTEwIG9mZnNldC1tZC0xXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9e3Byb2ZpbGUuaW1hZ2V9IGNsYXNzPVwidXNlci1pbWdcIiBhbHQ9e3Byb2ZpbGUudXNlcm5hbWV9IC8+XG5cdFx0XHRcdFx0PGg0Pntwcm9maWxlLnVzZXJuYW1lfTwvaDQ+XG5cdFx0XHRcdFx0PHA+e3Byb2ZpbGUuYmlvfTwvcD5cblxuXHRcdFx0XHRcdHsjaWYgaXNVc2VyfVxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cIi9zZXR0aW5nc1wiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgYWN0aW9uLWJ0blwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImlvbi1nZWFyLWFcIj48L2k+IEVkaXQgUHJvZmlsZSBTZXR0aW5nc1xuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdHs6ZWxzZX1cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3M9J2J0biBidG4tc20gYWN0aW9uLWJ0biB7cHJvZmlsZS5mb2xsb3dpbmcgPyBcImJ0bi1zZWNvbmRhcnlcIiA6IFwiYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCJ9J1xuXHRcdFx0XHRcdFx0XHRvbjpjbGljaz0ne3RvZ2dsZUZvbGxvd2luZ30nXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiaW9uLXBsdXMtcm91bmRcIj48L2k+XG5cdFx0XHRcdFx0XHRcdHtwcm9maWxlLmZvbGxvd2luZyA/ICdVbmZvbGxvdycgOiAnRm9sbG93J30ge3Byb2ZpbGUudXNlcm5hbWV9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHR7L2lmfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtMTAgb2Zmc2V0LW1kLTFcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFydGljbGVzLXRvZ2dsZVwiPlxuXHRcdFx0XHRcdDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgb3V0bGluZS1hY3RpdmVcIj5cblx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9Jy9wcm9maWxlL0B7cHJvZmlsZS51c2VybmFtZX0nIGNsYXNzPVwibmF2LWxpbmsge2Zhdm9yaXRlcyA/ICcnIDogJ2FjdGl2ZSd9XCI+TXkgQXJ0aWNsZXM8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzcz1cIm5hdi1saW5rIHtmYXZvcml0ZXMgPyAnYWN0aXZlJyA6ICcnfVwiIGhyZWY9Jy9wcm9maWxlL0B7cHJvZmlsZS51c2VybmFtZX0vZmF2b3JpdGVzJz5GYXZvcml0ZWQgQXJ0aWNsZXM8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxBcnRpY2xlTGlzdCB0YWI9J3Byb2ZpbGUnIHVzZXJuYW1lPSd7cHJvZmlsZS51c2VybmFtZX0nIHtmYXZvcml0ZXN9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Q0FLUSxNQUFJLE9BQU8sRUFDUCxTQUFTLEVBQ1QsZ0JBQUksQ0FBQzs7Ozs7O0tBRWIsTUFBTSxHQUFHLElBQUksS0FBSyxPQUFPLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7d0RBZWpELGdCQUFnQjs7Ozs7OzsyQ0FRVixhQUFhLHVEQUF3QixnQkFBZ0I7NkJBQzFELGdCQUFnQjs0QkFDakIsV0FBVzs7U0FFVixNQUFNOzt3RUFNcUIsNkRBQTZEOzsyQkFJMUYseUNBQXlDLHNCQUFHLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs4Q0FjekMsZ0JBQWdCLHVDQUFvQix5QkFBeUI7Ozs7OENBSTdELHlCQUF5Qix1Q0FBb0IsZ0JBQWdCOzs7Ozs7O1lBSzlDLGdCQUFnQjthQUFJLFNBQVM7Ozs7Ozs7Ozs7In0=
