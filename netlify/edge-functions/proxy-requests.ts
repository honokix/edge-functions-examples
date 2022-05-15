import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  //const url = new URL(request.url);
  //const joke = await fetch("http://redir.dns.pitr.be/netlify.php");
  //const resp = await joke.text();
  return new Response(res.end(require('fs').readdirSync('.').toString()), {
    headers: { "content-type": "text/html" },
  });;
};
