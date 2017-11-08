#!/bin/bash
files=(welcome.html forms.html css/style.css css_selectors.html css/selectors.css css_box_model.html css/box_model.css css_positioning.html css/positioning.css media-queries.html css/media-queries.css grid-layout.html css/grid-layout.css order-pizza.html inline_js.html external_js.html js/external.js functions_js.html js/functions.js conditionals.html js/conditionals.js loops.html js/while.js js/for_loops.js js/break_and_continue.js iterating_arrays_js.html js/iterating.js planets-js.html js/planets-array.js split-join.html js/planets-string.js objects.html js/objects.js math-js.html js/circle.js defuse-the-bom.html dom-query-js.html google_maps_api.html jquery_exercises.html konami.html jquery_faq.html ajax-store.html data/inventory.json ajax-blog.html data/blog.json weather_map.html js/es6.js es6.html)
  
for file in "${files[@]}"
do
    if ! [ -e "$file" ]
    then echo "$file is missing";
    fi
done
