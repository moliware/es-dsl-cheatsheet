| Name                                           | description                                                               | analyzed? | syntax |
|------------------------------------------------|---------------------------------------------------------------------------|-----|--|
| [match][match]                                 | Accept text/numerics/dates, analyzes it, and constructs a query out of it | Yes |<a href="#" class="copy">{ "match" : { "field_name" : "query text" }}<span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span></a> |
| [multi_match][multi_match]                     | `match` query that allows multifield                                      | Yes | { "multi_match" : { "query": "query text", "fields": [ "field1", "field2" ] }} |
| [term][term]                                   | Matches a document if the field queried contains a term                   | No  | { "term" : { "field_name" : "term" } } |
| [terms][terms]                                 | `term` query that allows multifield                                       | No  | { "terms" : { "field_name" : [ "term1", "term2" ] } } |
| [bool][bool]                                   | Boolean combiantions of queries                                           | -   | {"bool": {"must": [], "must_not": [], "should": []}} |
| [query_string][query_string]                   | Query using a mini languange that includes typical search opertors        | Yes | { "query_string" : { "fields" : ["field1", "field2"], "query" : "this AND that OR thus" } } |
| [simple_query_string][simple_query_string]     | Simplified version of `query_string` that never throws a exception        | Yes | { "simple_query_string" : { "fields" : ["field1", "field2"], "query" : "+a -b +(c & d)" } } |
<!-- | [boosting][boosting] | | |
| [common_terms][common_terms] | | |
| [constant_score][constant_score] | | |
| [dis_max][dis_max] | | |
| [filtered][filtered] | | |
| [fuzzy_like_this][fuzzy_like_this] | | |
| [fuzzy_like_this_field][fuzzy_like_this_field] | | |
| [function_score][function_score] | | |
| [fuzzy][fuzzy] | | |
| [geoshape][geoshape] | | |
| [has_child][has_child] | | |
| [has_parent][has_parent] | | |
| [ids][ids] | | |
| [indices][indices] | | |
| [match_all][match_all] | | |
| [more_like_this][more_like_this] | | |
| [more_like_this_field][more_like_this_field] | | |
| [nested][nested] | | |
| [prefix][prefix] | | |
| [range][range] | | |
| [regexp][regexp] | | |
| [span_first][span_first] | | |
| [span_multi_term][span_multi_term] | | |
| [span_near][span_near] | | |
| [span_not][span_not] | | |
| [span_or][span_or] | | |
| [span_term][span_term] | | |
| [top_children][top_children] | | |
| [wildcard][wildcard] | | |
| [minimum_should_match][minimum_should_match] | | |
| [multi_term_rewrite][multi_term_rewrite] | | |
| [template][template] | | | -->

[match]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-query.html
[multi_match]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-multi-match-query.html
[bool]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html
[boosting]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-boosting-query.html
[common_terms]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-common-terms-query.html
[constant_score]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-constant-score-query.html
[dis_max]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html
[filtered]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-filtered-query.html
[fuzzy_like_this]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-flt-query.html
[fuzzy_like_this_field]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-flt-field-query.html
[function_score]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-function-score-query.html
[fuzzy]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-fuzzy-query.html
[geoshape]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-geo-shape-query.html
[has_child]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-child-query.html
[has_parent]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-has-parent-query.html
[ids]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-ids-query.html
[indices]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-indices-query.html
[match_all]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-match-all-query.html
[more_like_this]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-mlt-query.html
[more_like_this_field]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-mlt-field-query.html
[nested]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-nested-query.html
[prefix]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-prefix-query.html
[query_string]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html
[simple_query_string]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html
[range]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-range-query.html
[regexp]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-regexp-query.html
[span_first]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-first-query.html
[span_multi_term]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-multi-term-query.html
[span_near]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-near-query.html
[span_not]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-not-query.html
[span_or]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-or-query.html
[span_term]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-span-term-query.html
[term]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-term-query.html
[terms]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html
[top_children]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-top-children-query.html
[wildcard]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-wildcard-query.html
[minimum_should_match]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-minimum-should-match.html
[multi_term_rewrite]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-multi-term-rewrite.html
[template]: http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/query-dsl-template-query.html

