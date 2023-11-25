import { Unwind, PageMetricGroup } from "../types";
import { Exportable } from "./exportable";
import { RuleStrategy } from "./strategy/rule-strategy";

export class Exporter implements Exportable {
  private readonly _data: PageMetricGroup[];

  constructor(data: PageMetricGroup[]) {
    this._data = data;
  }

  /**
   * Will return repeated data per value.
   * - Just returns one row per value if the value is a number.
   * - Will return multiple rows per value if the value is an object (loops through the object keys and returns a row per key)
   * @returns Unwinded data
   */
  prepare(): Unwind[] {
    const prepraredData: Unwind[] = [];
    this._data.forEach((group: PageMetricGroup) => {
      group.values.forEach((value) => {
        if(typeof value.value === 'object') { // unwind object values
          Object.values(value.value).forEach((val) => {
            prepraredData.push({ ...group, ...value, value: val! });
          });
        } else { // just push single value
          prepraredData.push({ ...group, ...value });
        }
      });
    });
    return prepraredData;
  }

  /**
   * Formats the unwinded data to the correct format rule / row
   * @param rule 
   * @param preparedData 
   * @returns 
   */
  format(rule: RuleStrategy, preparedData: Unwind[]): string[] {
    return preparedData.map((unwinded) => {
      return rule.ruleExport(unwinded);
    });
  }
  
  /**
   * Exports the data as string to a file
   * @param data 
   * @param fileName 
   */
  toFile(data: string[], fileName: string): void {
    const dataString = data.join("\n");
    const fs = require("fs");
    fs.writeFile(fileName, dataString, (err: any) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}