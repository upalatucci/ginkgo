import { auth } from "./auth";

const PUBLIC_ROUTES = ["/login"];
const LOGIN_PAGE = "/login";
const HOME_PAGE = "/";

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  // Authenticated on login page → send to home (avoid redirect loop)
  if (isPublicRoute && isAuthenticated)
    return Response.redirect(new URL(HOME_PAGE, nextUrl));

  // Not authenticated on protected route → send to login
  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN_PAGE, nextUrl));
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|logo\\.svg|favicon\\.ico|favicon\\.svg|favicon-96x96\\.png|apple-touch-icon\\.png|site\\.webmanifest).*)",
  ],
};
