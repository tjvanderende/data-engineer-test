# AVROTROS Data test

## Facebook test
In deze repository vind je een bestand met de naam `eenvandaag_page_metrics.json` 
Dit is een bestand met een response van de [facebook graph api][facebook_graph_api_docs]. 
Maak een script/applicatie die de data in het bestand transformeert naar CSV, die zonder verdere aanpassingen in Bigquery [geïmporteerd][big_query_batch_loading] kan worden.  
De data moet op het laagste aggregatieniveau opgeslagen worden. 

Het script mag in de programmeertaal waar je comfortabel mee bent. We willen de name, period, end_time en value van elke metric in het eindbestand zien.

Een aantal dingen om op te letten:
* Niet alle metics hebben een end_time
* Sommige metrics hebben een object als value

## Inleveren van je opdracht
Om je opdracht in te leveren vragen we je om een fork van deze repository te maken en deze met ons te delen.


[facebook_graph_api_docs]: https://developers.facebook.com/docs/graph-api/reference/insights/
[big_query_batch_loading]: https://cloud.google.com/bigquery/docs/batch-loading-data
