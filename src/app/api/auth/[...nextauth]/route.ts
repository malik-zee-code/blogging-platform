/**
 * This file contains the route configuration for the authentication API.
 * It imports the authentication configuration from "utils/auth" and uses it to initialize NextAuth.
 * The handler function is exported as both GET and POST to handle both HTTP methods.
 */

import { authConfig } from "utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
