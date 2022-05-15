import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  const url = new URL(request.url);
  
  const joke = await fetch(url.searchParams.get("u"), {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await joke.json();
  return context.json(jsonData);
};
