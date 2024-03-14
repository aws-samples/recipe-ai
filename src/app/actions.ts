import { amplifyClient } from "./amplify-utils";

export async function generateRecipe(formData: FormData) {
  const response = await amplifyClient.queries.askBedrock({
    ingredients: [formData.get("ingredients")?.toString() || ""],
  });

  console.log(response.data?.body);
  const res = JSON.parse(response.data?.body!);
  const content = res.content[0].text;
  console.log(content);
  return content || "";
}
