import { Unwind } from "../../types";

export interface RuleStrategy {
  ruleExport(unwinded: Unwind): string;
  getHeader(unwinded: Unwind): string;
}