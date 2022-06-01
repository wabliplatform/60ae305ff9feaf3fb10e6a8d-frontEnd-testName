# TempApi.ArticleApi

All URIs are relative to *http://83.212.100.226:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createarticle**](ArticleApi.md#createarticle) | **POST** /article | Creates the data
[**deletearticle**](ArticleApi.md#deletearticle) | **DELETE** /article/{articleId} | Delete the element
[**getAllarticle**](ArticleApi.md#getAllarticle) | **GET** /article/getAll | Get all the data
[**getarticle**](ArticleApi.md#getarticle) | **GET** /article/{articleId} | Get the element
[**updatearticle**](ArticleApi.md#updatearticle) | **PUT** /article/{articleId} | Updates the element



## createarticle

> Article createarticle(article)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ArticleApi();
let article = new TempApi.Article(); // Article | data to be created
apiInstance.createarticle(article, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article** | [**Article**](Article.md)| data to be created | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletearticle

> deletearticle(articleId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ArticleApi();
let articleId = "articleId_example"; // String | the Id parameter
apiInstance.deletearticle(articleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllarticle

> [Article] getAllarticle()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ArticleApi();
apiInstance.getAllarticle((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getarticle

> Article getarticle(articleId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ArticleApi();
let articleId = "articleId_example"; // String | the Id parameter
apiInstance.getarticle(articleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | **String**| the Id parameter | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatearticle

> Article updatearticle(articleId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ArticleApi();
let articleId = "articleId_example"; // String | the Id parameter
let opts = {
  'article': new TempApi.Article() // Article | data to be updated
};
apiInstance.updatearticle(articleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | **String**| the Id parameter | 
 **article** | [**Article**](Article.md)| data to be updated | [optional] 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

