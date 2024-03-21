import { amplifyClient } from "./amplify-utils";

export async function generateRecipe(formData: FormData) {
  const response = await amplifyClient.queries.askBedrock({
    ingredients: [formData.get("ingredients")?.toString() || ""],
  });

  const res = JSON.parse(response.data?.body!);
  const content = res.content[0].text;
  return content || "";
}
