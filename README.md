# AVROTROS Data test

## facebook test
In deze repository vind je een bestand met de naam `eenvandaag_page_metrics.json` 
Dit is een bestand met een response van de [facebook graph api][facebook_graph_api_docs]. 
Maak een script/applicatie die de data in het bestand transformeer naar een bestandsformaat dat in Bigquery geïmporteerd kan worden. 
De data moet op het laagste aggregatieniveau opgeslagen worden. Hier is een lijst van [data types][big_query_batch_loading]:
* Avro
* Comma-separated values (CSV)
* JSON (newline-delimited)
* ORC
* Parquet

Het script mag in programmeertaal waar je comfortabel mee bent. We willen de name, period, end_time en value val elke metric in het eind bestand zien.

Wat dingen om op te letten:
* Niet alle metics hebben een end_time
* Sommige metrics hebben een object als value

## Inleveren van je opdracht
Om je opdracht in te leveren vragen we je om een fork van deze repository te maken en deze met ons te delen.


[facebook_graph_api_docs]: https://developers.facebook.com/docs/graph-api/reference/insights/
[big_query_batch_loading]: https://cloud.google.com/bigquery/docs/batch-loading-data