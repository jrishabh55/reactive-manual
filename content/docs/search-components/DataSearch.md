---
id: datasearch
title: "DataSearch"
layout: docs
sectionid: docs
permalink: search-components/datasearch.html
prev: range-components/ratingsfilter.html
prevTitle: "Range Components: RatingsFilter"
next: search-components/categorysearch.html
nextTitle: "CategorySearch"
redirect_from:
    - 'basic-components/datasearch.html'
    - 'search-components/datasearch'
    - 'datasearch'
---

![Image to be displayed](https://i.imgur.com/rthmjVh.png)

`DataSearch` creates a search box UI component that is connected to one or more database fields.

Example uses:
* Searching for a rental listing by its `name` or `description` field.
* Creating an e-commerce search box for finding products by their listing properties.

## Usage

### Basic Usage

```js
<DataSearch
  componentId="SearchSensor"
  dataField={["group_venue", "group_city"]}
/>
```

### Usage With All Props

```js
<DataSearch
  componentId="SearchSensor"
  dataField={["group_venue", "group_city"]}
  title="Search"
  defaultValue="Songwriting"
  fieldWeights={[1, 3]}
  placeholder="Search for cities or venues"
  autosuggest={true}
  defaultSuggestions={[{label: "Songwriting", value: "Songwriting"}, {label: "Musicians", value: "Musicians"}]}
  highlight={true}
  highlightField="group_city"
  queryFormat="or"
  fuzziness={0}
  debounce={100}
  react={{
    and: ["CategoryFilter", "SearchFilter"]
  }}
  showFilter={true}
  filterLabel="Venue filter"
  URLParams={false}
/>
```

## Props

- **componentId** `String`
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String or Array`
    database field(s) to be connected to the component's UI view. DataSearch accepts an Array in addition to String, useful for applying search across multiple fields.
- **nestedField** `String` [optional]
    use to set the `nested`  mapping field that allows arrays of objects to be indexed in a way that they can be queried independently of each other. Applicable only when dataField is a part of `nested` type.
- **title** `String or JSX` [optional]
    set the title of the component to be shown in the UI.
- **defaultValue** `string` [optional]
    set the initial search query text on mount.
- **value** `string` [optional]
    controls the current value of the component. It sets the search query text (on mount and on update). Use this prop in conjunction with `onChange` function.
- **downShiftProps** `Object` [optional]
    allow passing props directly to `Downshift` component. You can read more about Downshift props [here](https://github.com/paypal/downshift#--downshift-------).
- **fieldWeights** `Array` [optional]
    set the search weight for the database fields, useful when dataField is an Array of more than one field. This prop accepts an array of numbers. A higher number implies a higher relevance weight for the corresponding field in the search results.
- **placeholder** `String` [optional]
    set the placeholder text to be shown in the searchbox input field. Defaults to "Search".
- **showIcon** `Boolean` [optional]
    whether to display a search or custom icon in the input box. Defaults to `true`.
- **iconPosition** `String` [optional]
    sets the position of the search icon. Can be `left` or `right`. Defaults to `right`.
- **icon** `JSX` [optional]
    displays a custom search icon instead of the default 🔍
- **showClear** `Boolean` [optional]
    show a clear text icon. Defaults to `false`.
- **clearIcon** `JSX` [optional]
    allows setting a custom icon for clearing text instead of the default cross.
- **autosuggest** `Boolean` [optional]
    set whether the autosuggest functionality should be enabled or disabled. Defaults to `true`.
- **strictSelection** `Boolean` [optional]
    defaults to `false`. When set to `true` the component will only set its value and fire the query if the value was selected from the suggestion. Otherwise the value will be cleared on selection. This is only relevant with `autosuggest`.
- **defaultSuggestions** `Array` [optional]
    preset search suggestions to be shown on focus when the search box does not have any search query text set. Accepts an array of objects each having a **label** and **value** property. The label can contain either String or an HTML element.
- **debounce** `Number` [optional]
    sets the milliseconds to wait before executing the query. Defaults to `0`, i.e. no debounce.
- **highlight** `Boolean` [optional]
    whether highlighting should be enabled in the returned results.
- **highlightField** `String or Array` [optional]
    when highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **dataField** prop.
- **customHighlight** `Function` [optional]
    a function which returns the custom [highlight settings](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-highlighting.html). It receives the `props` and expects you to return an object with the `highlight` key. Check out the <a href="https://opensource.appbase.io/reactivesearch/demos/technews/" target="_blank">technews demo</a> where the `DataSearch` component uses a `customHighlight` as given below,
    ```js
    <DataSearch
        componentId="title"
        dataField={['title', 'text']}
        highlight
        customHighlight={(props) => ({
            highlight: {
                pre_tags: ['<mark>'],
                post_tags: ['</mark>'],
                fields: {
                    text: {},
                    title: {},
                },
                number_of_fragments: 0,
            },
        })}
    />
    ```

- **queryFormat** `String` [optional]
    Sets the query format, can be **or** or **and**. Defaults to **or**.
    * **or** returns all the results matching **any** of the search query text's parameters. For example, searching for "bat man" with **or** will return all the results matching either "bat" or "man".
    * On the other hand with **and**, only results matching both "bat" and "man" will be returned. It returns the results matching **all** of the search query text's parameters.

- **fuzziness** `String or Number` [optional]
    Sets a maximum edit distance on the search parameters, can be **0**, **1**, **2** or **"AUTO"**. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, **fox** can become **box**. Read more about it in the elastic search [docs](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html).
- **showFilter** `Boolean` [optional]
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.
- **render** `Function` [optional]
    You can render custom suggestions by using `render` prop.
    <br/>
    It accepts an object with these properties:
    - **`loading`**: `boolean`
        indicates that the query is still in progress
    - **`error`**: `object`
        An object containing the error info
    - **`data`**: `array`
        An array of parsed suggestions obtained from the applied query.
    - **`rawData`**: `array`
        An array of original suggestions obtained from the applied query.
    - **`value`**: `string`
        current search input value i.e the search query being used to obtain suggestions.
    - **`downshiftProps`**: `object`
        provides all the control props from `downshift` which can be used to bind list items with click/mouse events.
        Read more about it [here](https://github.com/downshift-js/downshift#children-function).
```js
<DataSearch
        render={({
            loading,
            error,
            data,
            value,
            downshiftProps: {
                isOpen,
                getItemProps,
            }
        }) => {
            if(loading) {
                return <div>Fetching Suggestions.</div>
            }
            if(error) {
                return (
                    <div>
                        Something went wrong! Error details {JSON.stringify(error)}
                    </div>
                )
            }
            return (isOpen && Boolean(value.length)) ? (
                        <div>
                            {data.slice(0, 5).map((suggestion, index) => (
                                <div
                                    key={suggestion.value}
                                    {...getItemProps({ item: suggestion })}
                                >
                                    {suggestion.value}
                                </div>
                            ))}
                            {Boolean(value.length) && (
                                <div {...getItemProps({ item: { label: value, value: value }})}>
                                    Show all results for "{value}"
                                </div>
                            )}
                        </div>
				) : null
        }}
/>
```
Or you can also use render function as children
```js
<DataSearch>
        {
            ({
                loading,
                error,
                data,
                rawData,
                value,
                downshiftProps
            }) => (
                // return UI to be rendered
            )
        }
</DataSearch>
```
- **renderError** `String or JSX or Function` [optional]
    can we used to render an error message in case of any error.
    ```js
    renderError={(error) => (
            <div>
                Something went wrong!<br/>Error details<br/>{error}
            </div>
        )
    }
    ```
- **renderNoSuggestion** `String or JSX or Function` [optional]
    can we used to render a message when there is no suggestions found.
    ```js
    renderNoSuggestion={() => (
            <div>
                No suggestions found
            </div>
        )
    }
    ```
- **onChange** `function` [optional]
    is a callback function which accepts component's current **value** as a parameter. It is called when you are using the `value` props and the component's value changes. This prop is used to implement the [controlled component](https://reactjs.org/docs/forms.html#controlled-components) behavior.
- **onSuggestions** `Function` [optional]
    You can pass a callback function to listen for the changes in suggestions.The function receives `suggestions` list.
- **onError** `Function` [optional]
    gets triggered in case of an error and provides the `error` object, which can be used for debugging or giving feedback to the user if needed.

## Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/DataSearch" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Styles

`DataSearch` component supports `innerClass` prop with the following keys:

- `title`
- `input`
- `list`

Read more about it [here](/theming/class.html).

## Extending

`DataSearch` component can be extended to
1. customize the look and feel with `className`, `style`,
2. update the underlying DB query with `customQuery`,
3. connect with external interfaces using `beforeValueChange`, `onValueChange`, `onValueSelected` and `onQueryChange`,
4. specify how search suggestions should be filtered using `react` prop,
5. use your own function to render suggestions using `parseSuggestion` prop. It expects an object back for each `suggestion` having keys `label` and `value`. The query is run against the `value` key and `label` is used for rendering the suggestions. `label` can be either `String` or JSX. For example,

```js
<DataSearch
  ...
  parseSuggestion={(suggestion) => ({
    label: (
        <div>
            {suggestion._source.original_title} by
            <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
                {suggestion._source.authors}
            </span>
        </div>
    ),
    value: suggestion._source.original_title,
    source: suggestion._source  // for onValueSelected to work with parseSuggestion
  })}
/>
```

- it's also possible to take control of rendering individual suggestions with `parseSuggestion` prop or the entire suggestions rendering using the `render` prop. Check the [custom suggestions](/advanced/customsuggestions.html) recipe for more info.

6. add the following [synthetic events](https://reactjs.org/events.html) to the underlying `input` element:
    - onBlur
    - onFocus
    - onKeyPress
    - onKeyDown
    - onKeyUp
    - autoFocus

```js
<DataSearch
  ...
  className="custom-class"
  style={{"paddingBottom": "10px"}}
  customQuery={
    function(value, props) {
      return {
        query: {
            match: {
                data_field: "this is a test"
            }
        }
      }
    }
  }
  beforeValueChange={
    function(value) {
      // called before the value is set
      // returns a promise
      return new Promise((resolve, reject) => {
        // update state or component props
        resolve()
        // or reject()
      })
    }
  }
  onValueChange={
    function(value) {
      console.log("current value: ", value)
      // set the state
      // use the value with other js code
    }
  }
  onValueSelected={
    function(value, cause, source) {
      console.log("current value: ", value)
    }
  }
  onQueryChange={
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  }
  // specify how and which suggestions are filtered using `react` prop.
  react={
    "and": ["pricingFilter", "dateFilter"],
    "or": ["searchFilter"]
  }
/>
```

- **className** `String`
    CSS class to be injected on the component container.
- **style** `Object`
    CSS styles to be applied to the **DataSearch** component.
- **customQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **DataSearch** component as long as the component is a part of `react` dependency of at least one other component.
- **defaultQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the source component, as defined in Elasticsearch Query DSL, which doesn't get leaked to other components.<br/>
    Read more about it [here](/advanced/customquery.html#when-to-use-default-query).
- **beforeValueChange** `Function`
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user searches for a product in a DataSearch.
- **onValueSelected** `Function`
    is called with the value selected via user interaction. It works only with `autosuggest` and is called whenever a suggestion is selected or a search is performed by pressing **enter** key. It also passes the `cause` of action and the `source` object if the cause of action was `'SUGGESTION_SELECT'`. The possible causes are:
    - `'SUGGESTION_SELECT'`
    - `'ENTER_PRESS'`
    - `'CLEAR_VALUE'
- **onQueryChange** `Function`
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
- **react** `Object`
    specify dependent components to reactively update **DataSearch's** suggestions.
    - **key** `String`
        one of `and`, `or`, `not` defines the combining clause.
        - **and** clause implies that the results will be filtered by matches from **all** of the associated component states.
        - **or** clause implies that the results will be filtered by matches from **at least one** of the associated component states.
        - **not** clause implies that the results will be filtered by an **inverse** match of the associated component states.
    - **value** `String or Array or Object`
        - `String` is used for specifying a single component by its `componentId`.
        - `Array` is used for specifying multiple components by their `componentId`.
        - `Object` is used for nesting other key clauses.

## Examples

<a href="https://opensource.appbase.io/playground/?selectedKind=Search%20components%2FDataSearch" target="_blank">DataSearch with default props</a>
