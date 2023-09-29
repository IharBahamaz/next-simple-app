export { default } from 'next-auth/middleware';
//protecting our routes

export const config = {
  //*: zero or more params
  //+: one or more params
  // ?:zero or one
  matcher: ['/users/:id'],
};
