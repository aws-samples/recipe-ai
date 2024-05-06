import config from "@/../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

Amplify.configure(config);

export const amplifyClient = generateClient<Schema>();
