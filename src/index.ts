import * as json from '../eenvandaag_page_metrics.json';
import { Exportable } from './exporter/exportable';
import { Exporter } from './exporter/exporter';
import { CsvExportStrategy } from './exporter/strategy/cvs-export-strategy';
import { RuleStrategy } from './exporter/strategy/rule-strategy';
import { PageMetricGroup } from './types';
const importData = (): PageMetricGroup[] => {
    return json.data;
}

/**
 * Simple example usage
 */
const data = importData();
const exportRule: RuleStrategy = new CsvExportStrategy(";");
const exporter: Exportable = new Exporter(data);

const preparedData = exporter.prepare();
const formattedData = exporter.format(exportRule, preparedData);
exporter.toFile(formattedData, "test.csv");