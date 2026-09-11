import html from './tasks.html';

// Isolated synthetic acceptance app. No backend, secrets or production bindings.
export default {
  fetch(request, env) {
    if (request.method !== 'GET') return new Response('Method not allowed', {status: 405});
    return new Response(html, {headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-revision': env.SOURCE_REVISION || 'unversioned',
      'x-content-type-options': 'nosniff'
    }});
  }
};
