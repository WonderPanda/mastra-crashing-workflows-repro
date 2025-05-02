import { Step, Workflow } from "@mastra/core/workflows";

const step2 = new Step({
  id: "step2",
  execute: async () => {
    console.log("step 2");

    return { message: "Completed step 2" };
  },
});

export const workflow2 = new Workflow({
  name: "workflow2",
})
  .step(step2)
  .commit();
