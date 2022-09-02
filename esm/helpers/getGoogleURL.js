export default function () {
  var rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  var options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'].join(' ')
  };
  var qs = new URLSearchParams(options);
  return "".concat(rootUrl, "?").concat(qs.toString());
}