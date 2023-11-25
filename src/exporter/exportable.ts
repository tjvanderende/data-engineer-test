import { Unwind } from "../types";
import { RuleStrategy } from "./strategy/rule-strategy";

export interface Exportable {
  prepare(): Unwind[];
  format(rule: RuleStrategy, preparedData: Unwind[]): string[];
  toFile(data: string[], fileName: string): void;
}
