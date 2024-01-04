import { Step } from "./step.model";
import { StepGroup } from "./stepGroup.model";

export class MathResponse{
  stepGroups: StepGroup[] = [];
  steps: Step[] = [];
  expression: string = "";
  result: string = "";
  method: string = "";
  className: string = "";
  pack: string = "";
  timeMilliseconds: string = "";
  status: boolean = false;
}

