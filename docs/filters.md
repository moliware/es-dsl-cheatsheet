| Name                                                   | description                                   | cached by default? | syntax |
|--------------------------------------------------------|-----------------------------------------------|--------------------|--------|
| [and][and]                                             | Applies `AND` on a list of filters            | No                 | {"and": [] } |
| [or][or]                                               | Applies `OR` on a list of filters             | No                 | {"or": [] } |
| [bool][bool]                                           | Boolean combiantions of filters               | No                 | {"bool": {"must": [], "must_not": [], "should": []}} |
| [exists][exists]                                       | Have at least one non-null value in the field | Yes                | {"exists": {"field": "*field_name*"}} |
| [range][range]                                         | Documents that have terms within a range      | [Yes][range_cache] | {"range" : {"*field_name*" : { "gte": 1, "lte": 100}}} |
| [term][term]                                           | Documents that contain a term                 | Yes                | {"term" : { "*field_name*" : "*term*"}} |
| [terms][terms]                                         | Documents that contain any term on the list   | Yes                | {"terms" : { "*field_name*" : ["*term1*", "*term2*"]}} |
| [query][query]                                         | Wrap a query to be used as a filter           | No                 | {"query" : { *your_query* } }|
| [script][script]                                       | Define a script as a filter                   | No                 | {"script" : {"script" : "doc['num1'].value > 1"} |
<!-- | [geo_bounding_box][geo_bounding_box] | | | |
| [geo_distance][geo_distance] | | | |
| [geo_distance_range_filter][geo_distance_range_filter] | | | |
| [geo_polygon_filter][geo_polygon_filter] | | | |
| [geoshape][geoshape] | | | |
| [geohash_cell][geohash_cell] | | | |
| [has_child][has_child] | | | |
| [has_parent][has_parent] | | | |
| [ids][ids] | | | |
| [indices][indices] | | | |
| [limit][limit] | | | |
| [match_all][match_all] | | | |
| [missing][missing] | | | |
| [nested][nested] | | | |
| [not][not] | | | |
| [prefix][prefix] | | | |
| [regexp][regexp] | | | |
| [type][type] | | | | -->

[and]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-and-filter.html
[bool]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-bool-filter.html
[exists]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-exists-filter.html
[geo_bounding_box]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-bounding-box-filter.html
[geo_distance]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-distance-filter.html
[geo_distance_range_filter]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-distance-range-filter.html
[geo_polygon_filter]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-polygon-filter.html
[geoshape]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-shape-filter.html
[geohash_cell]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geohash-cell-filter.html
[has_child]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-child-filter.html
[has_parent]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-parent-filter.html
[ids]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-ids-filter.html
[indices]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-indices-filter.html
[limit]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-limit-filter.html
[match_all]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-all-filter.html
[missing]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-missing-filter.html
[nested]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-nested-filter.html
[not]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-not-filter.html
[or]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-or-filter.html
[prefix]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-prefix-filter.html
[query]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-filter.html
[range]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-range-filter.html
[range_cache]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-range-filter.html#_caching_16
[regexp]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-regexp-filter.html
[script]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-script-filter.html
[term]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-term-filter.html
[terms]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-terms-filter.html
[type]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-type-filter.html