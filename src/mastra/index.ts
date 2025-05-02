import { Mastra } from "@mastra/core";
import { workflow1 } from "./workflows/workflow1";
import { workflow2 } from "./workflows/workflow2";

export const mastra = new Mastra({
  workflows: {
    workflow1,

    // NOTE: COMMENT OUT WORKFLOW 2 BELOW TO SEE THAT THE UI DOES NOT BREAK
    workflow2,
  },
});
