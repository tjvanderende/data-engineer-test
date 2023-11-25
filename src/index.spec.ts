import { PageMetricGroup, Unwind } from './types';
import * as json from '../eenvandaag_page_metrics.json';
import { RuleStrategy } from './exporter/strategy/rule-strategy';
import { Exportable } from './exporter/exportable';
import { CsvExportStrategy } from './exporter/strategy/cvs-export-strategy';
import { Exporter } from './exporter/exporter';

describe('Export', () => {
  let exporter: Exportable;
  let exportRule: RuleStrategy;
  describe('CsvExportStrategy', () => {
    let testData: PageMetricGroup[];
    beforeEach(() => {
      testData = [{ 
        ...json.data[1],
        values: json.data[1].values.slice(0, 3)
      }];
      exportRule = new CsvExportStrategy(",");
      exporter = new Exporter(testData);
     
    });
    it('Should give me correct unwinded data', () => {
      const preparedData = exporter.prepare();
      const expected: Unwind[] = [
        { ...testData[0], ...testData[0].values[0] },
        { ...testData[0], ...testData[0].values[1] },
        { ...testData[0], ...testData[0].values[2] },
      ];
      expect(preparedData).toEqual(expected);
    });
     it('Should give me correct formatted data', () => {
      console.log(testData);
      const preparedData = exporter.prepare();
      const formattedData = exporter.format(exportRule, preparedData);
      const expected = [
        "page_actions_post_reactions_anger_total,day,\"\",Daily total post anger reactions of a page.,Daily: total post anger reactions of a page.,167638236597192/insights/page_actions_post_reactions_anger_total/day,26,2022-02-04T08:00:00+0000,",
        "page_actions_post_reactions_anger_total,day,\"\",Daily total post anger reactions of a page.,Daily: total post anger reactions of a page.,167638236597192/insights/page_actions_post_reactions_anger_total/day,17,2022-02-05T08:00:00+0000,",
        "page_actions_post_reactions_anger_total,day,\"\",Daily total post anger reactions of a page.,Daily: total post anger reactions of a page.,167638236597192/insights/page_actions_post_reactions_anger_total/day,15,2022-02-06T08:00:00+0000,"
      ];
      expect(formattedData).toEqual(expected);
    });
  });
});