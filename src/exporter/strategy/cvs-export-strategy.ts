import { Unwind } from "../../types";
import { RuleStrategy } from "./rule-strategy";

export class CsvExportStrategy implements RuleStrategy {
  private readonly _delimeter; 
  private readonly _columnHeaders?: string[];
  constructor(delimeter: "," | ";", columnHeaders?: string[]) {
    this._delimeter = delimeter;
    this._columnHeaders = columnHeaders;
  }

  ruleExport(unwinded: Unwind): string {
    const unwindedIndex: Record<string, any> = unwinded;
    const valueKeys = this._columnHeaders ?? Object.keys(unwinded);
    return valueKeys.reduce((acc: string, key: string) => {
      const value = unwindedIndex[key];
      if(!value || typeof value === 'object') return `${acc}""${this._delimeter}`; // cannot be converted so we return empty string
      return `${acc}${value}${this._delimeter}`;
    }, "");
  }
}