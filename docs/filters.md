| Name | description | cached? | syntax |
|----------|-------------|------|--|
| [and][and] | Applies `AND` on a list of filters | Not by default | {"and": [] } |
| [bool][bool] | Boolean combiantions of filters | Not by default | {"bool": {"must": [], "must_not": [], "should": []}} |
| [exists][exists] | Have at least one non-null value in the field | Yes | {"exists": {"field": "field_name"}} |

[and]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-and-filter.html
[bool]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-bool-filter.html
[exists]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-exists-filter.html