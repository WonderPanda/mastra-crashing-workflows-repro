import { Step, Workflow } from "@mastra/core/workflows";
import { workflow2 } from "./workflow2";

const step1 = new Step({
  id: "step1",
  execute: async () => {
    console.log("step 1");

    return { message: "Completed step 1" };
  },
});

export const workflow1 = new Workflow({
  name: "workflow1",
})
  .step(step1)
  .then(workflow2)
  .commit();
