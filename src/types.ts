export type PageMetric = {
  value: number | Record<string, number | undefined>;
  endTime?: string;
}

export type PageMetricGroup = {
  id: string;
  name: string;
  period: string;
  title: string | null;
  description?: string;
  values: PageMetric[];
}

export type Unwind = (Omit<PageMetric, 'values'> & PageMetric); // unwind values (so instead of having a structured type, we unwind on value level)