---
id: singlelist
title: "SingleList"
layout: docs
sectionid: docs
permalink: list-components/singlelist.html
prev: base-components/selectedfilters.html
prevTitle: "Base Components: SelectedFilters"
next: list-components/multilist.html
nextTitle: "MultiList"
redirect_from:
    - "basic-components/singlelist.html"
    - "list-components/singlelist"
    - "singlelist"
---

![Image to be displayed](https://i.imgur.com/eAUEx7k.png)

`SingleList` creates a single selection based list UI component that is connected to a database field.

Example uses:
* select a category item from a list of categories in an e-commerce website.
* select a cuisine item from a list of cuisine items in a food delivery app.

## Usage

### Basic Usage

```js
<SingleList
  componentId="CitySensor"
  dataField="group.group_city.raw"
  title="Cities"
/>
```

### Usage With All Props

```js
<SingleList
  componentId="CitySensor"
  dataField="group.group_city.raw"
  title="Cities"
  size={100}
  sortBy="count"
  defaultValue="London"
  selectAllLabel="All Cities"
  showRadio={true}
  showCount={true}
  showSearch={true}
  placeholder="Search City"
  react={{
    and: ["CategoryFilter", "SearchFilter"]
  }}
  showFilter={true}
  filterLabel="City"
  URLParams={false}
  loader="Loading ..."
/>
```

## Props

- **componentId** `String`  
    unique identifier of the component, can be referenced in other components' `react` prop.
- **dataField** `String`  
    data field to be connected to the component's UI view. The list items are filtered by a database query on this field. This field is used for doing an aggregation and returns the result. We're using a `.raw` multifield here. You can use a field of type `keyword` or `not_analyzed` depending on your Elasticsearch cluster.
- **nestedField** `String` [optional]  
    use to set the `nested`  mapping field that allows arrays of objects to be indexed in a way that they can be queried independently of each other. Applicable only when dataField is a part of `nested` type.
- **title** `String or JSX` [optional]  
    title of the component to be shown in the UI.
- **loader** `String or JSX` [optional]  
    to display an optional loader while fetching the options.
- **size** `Number` [optional]  
    control how many items to display in the List. Defaults to 100.
- **sortBy** `String` [optional]  
    sort the list items by one of `count`, `asc`, `desc`. Defaults to `count`, which sorts the list by the frequency of count value, most first.
- **defaultValue** `string` [optional]  
    selects an initial item from the list on mount.
- **value** `string` [optional]  
    controls the current value of the component. It selects the item from the list (on mount and on update). Use this prop in conjunction with `onChange` function.
- **selectAllLabel** `String` [optional]  
    add an extra `Select all` item to the list with the provided label string.
- **showRadio** `Boolean` [optional]  
    show radio button icon for each list item. Defaults to `true`.
- **showCount** `Boolean` [optional]  
    show count value of the number of occurences besides a list item. Defaults to `true`.
- **transformData** `Function` [optional]  
    allows transforming the data to render inside the list. You can change the order, remove, or add items, transform their values with this method. It provides the data as param which is an array of objects of shape `{ key: <string>, doc_count: <number> }` and expects you to return the array of objects of same shape. For example:
```js
transformData={(list) => {
    // sort or update the list
    return list;
}}
```
- **showMissing** `Boolean` [optional]  
    defaults to `false`. When set to `true` it also retrives the aggregations for missing fields under the label specified by `missingLabel`.
- **missingLabel** `String` [optional]  
    defaults to `N/A`. Specify a custom label to show when `showMissing` is set to `true`.
- **showSearch** `Boolean` [optional]  
    whether to show a searchbox to filter the list items locally. Defaults to `true`.
- **placeholder** `String` [optional]  
    placeholder to be displayed in the searchbox, only applicable when the `showSearch` prop is set to true. When applicable, the default placeholder value is set to "Search".
- **showFilter** `Boolean` [optional]  
    show as filter when a value is selected in a global selected filters view. Defaults to `true`.
- **filterLabel** `String` [optional]  
    An optional label to display for the component in the global selected filters view. This is only applicable if `showFilter` is enabled. Default value used here is `componentId`.
- **URLParams** `Boolean` [optional]  
    enable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to `false`.
- **showLoadMore** `Boolean` [optional]  
    defaults to `false` and works only with elasticsearch >= 6 since it uses [composite aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-composite-aggregation.html). This adds a "Load More" button to load the aggs on demand combined with the `size` prop. Composite aggregations are in beta and this is an experimental API which might change in a future release.

    `Note`: Composite aggregations do not support sorting by `count`. Hence with `showLoadMore`, you can only sort by: `asc` or `desc` order. `sortBy` prop defaults to `asc` when `showLoadMore` prop is used.
- **renderItem** `Function` [optional]  
    customize the rendered list via a function which receives the item label, count & isSelected and expects a JSX or String back. For example:
    ```js
    renderItem={(label, count, isSelected) => (
        <div>
            {label}
            <span style={{
                marginLeft: 5, color: isSelected ? 'red' : 'dodgerblue' 
            }}>
                {count}
            </span>
        </div>
    )}
    ```
- **render** `Function` [optional]  
    an alternative callback function to `renderItem`, where user can define how to render the view based on all the data changes.
    <br/>
    It accepts an object with these properties:
    - **`loading`**: `boolean` 
        indicates that the query is still in progress
    - **`error`**: `object`
        An object containing the error info
    - **`data`**: `array`
        An array of results obtained from the applied query.
    - **`value`**: `string`
        current selected value.
    - **`handleChange`**: `function`
        A callback function can be used to mark the list value as selected. 
```js
<SingleList
        render={({
            loading,
            error,
            data,
            handleChange,
        }) => {
            if(loading) { 
                return <div>Fetching Results.</div>
            }
            if(error) {
                return (
                    <div>
                        Something went wrong! Error details {JSON.stringify(error)}
                    </div>
                )
            }
            return (
                <ul>
                    {
                        data.map(item => (
                            <li>
                                <input 
                                    type="radio"
                                    value={item.key}
                                    onChange={handleChange} 
                                />
                                {item.key}-{item.count}
                            </li>
                        ))
                    }
                </ul>
            )
        }}
/>
```
Or you can also use render function as children
```js
<SingleList>
        {
            ({
                loading,
                error,
                data,
                value,
                handleChange,
            }) => (
                // return UI to be rendered
            )
        }
</SingleList>
```
- **renderError** `String or JSX or Function` [optional]
    can be used to render an error message in case of any error.
    ```js
    renderError={(error) => (
            <div>
                Something went wrong!<br/>Error details<br/>{error}
            </div>
        )
    }
    ```
- **renderNoResults** `Function` [optional]  
    can be used to render a message in case of no list items.

    ```js
    renderNoResults={() => <p>No Results Found!</p>}
    ```
- **onChange** `function` [optional]  
    is a callback function which accepts component's current **value** as a parameter. It is called when you are using the `value` props and the component's value changes. This prop is used to implement the [controlled component](https://reactjs.org/docs/forms.html#controlled-components) behavior.
- **onError** `Function` [optional]  
    gets triggered in case of an error and provides the `error` object, which can be used for debugging or giving feedback to the user if needed.

## Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SingleList" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Styles

`SingleList` component supports `innerClass` prop with the following keys:    

- `title`
- `input`
- `list`
- `radio`
- `label`
- `count`
 
Read more about it [here](/theming/class.html).


## Extending

`SingleList` component can be extended to
1. customize the look and feel with `className`, `style`,
2. update the underlying DB query with `customQuery`, `defaultQuery`,
3. connect with external interfaces using `beforeValueChange`, `onValueChange` and `onQueryChange`,
4. specify how options should be filtered or updated using `react` prop.

```js
<SingleList
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
   defaultQuery={
    function(value, props) {
      return {
          timeout: "1s"
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
  onQueryChange={
    function(prevQuery, nextQuery) {
      // use the query with other js code
      console.log('prevQuery', prevQuery);
      console.log('nextQuery', nextQuery);
    }
  }
  // specify how and which options are filtered using `react` prop.
  react={
    "and": ["pricingFilter", "dateFilter"],
    "or": ["searchFilter"]
  }
/>
```

- **className** `String`  
    CSS class to be injected on the component container.
- **style** `Object`  
    CSS styles to be applied to the **SingleList** component.
- **customQuery** `Function`  
    is a callback function which accepts component's current **value** as a parameter and **returns** the data query to be applied to the component, as defined in Elasticsearch Query DSL.
    `Note:` customQuery is called on value changes in the **SingleList** component as long as the component is a part of `react` dependency of at least one other component.
- **defaultQuery** `Function`
    takes **value** and **props** as parameters and **returns** the data query to be applied to the source component, as defined in Elasticsearch Query DSL, which doesn't get leaked to other components.    
    Read more about it [here](/advanced/customquery.html#when-to-use-default-query).
- **beforeValueChange** `Function`  
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called everytime before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.
- **onValueChange** `Function`  
    is a callback function which accepts component's current **value** as a parameter. It is called everytime the component's value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a "Discounted Price" SingleList.
- **onQueryChange** `Function`  
    is a callback function which accepts component's **prevQuery** and **nextQuery** as parameters. It is called everytime the component's query changes. This prop is handy in cases where you want to generate a side-effect whenever the component's query would change.
- **react** `Object`  
    specify dependent components to reactively update **SingleList's** options.
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

<a href="https://opensource.appbase.io/playground/?selectedKind=List%20components%2FSingleList" target="_blank">SingleList with default props</a>
