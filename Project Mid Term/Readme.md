## **Database Structure**

-   Video object

```
{
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  embedUrl: String,
  thumbnailUrl: String,
  products: [mongoose.Schema.Types.ObjectId],
  comments: [mongoose.Schema.Types.ObjectId],
}

```

-   Product object

```
{
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  price: Number,
  productUrl: String,
}
```

-   Comment object

```
{
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  text: String,
  createdAt: Date,
}
```

## **GET /videos**

Returns all videos in the system.

-   **URL Params**  
    None
-   **Data Params**  
    None
-   **Headers**  
    Content-Type: application/json
-   **Success Response:**
-   **Code:** 200  
    **Content:**

```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

## **GET /videos/:id/products**

Returns all product in the video.

-   **URL Params**  
    _Required:_ `id=[integer]`
-   **Data Params**  
    None
-   **Headers**  
    Content-Type: application/json
-   **Success Response:**
-   **Code:** 200  
     **Content:**

```
{
  Products: [
            {<product_object>},
            {<product_object>},
            {<product_object>}
  ]
}
```

-   **Error Response:**
    -   **Code:** 404
        **Content:** `{ message: "Product not found" }`
        OR
    -   **Code:** 500
        **Content:** `{ message: "Internal server error" }`

## **GET /videos/:id/comments**

Returns all comment in the video.

-   **URL Params**  
    _Required:_ `id=[integer]`
-   **Data Params**  
    None
-   **Headers**  
    Content-Type: application/json
-   **Success Response:**
-   **Code:** 200  
     **Content:**

```
{
  Comments: [
            {<comment_object>},
            {<comment_object>},
            {<comment_object>}
  ]
}
```

-   **Error Response:**
    -   **Code:** 404
        **Content:** `{ message: "Comment not found" }`
        OR
    -   **Code:** 500
        **Content:** `{ message: "Internal server error" }`

## **POST /videos/:id/comments**

Creates a new comment and returns message success or failed.

-   **URL Params**  
    None
-   **Headers**  
    Content-Type: application/json
-   **Data Params**

```
  {
    username: string,
    text: string
  }
```

-   **Success Response:**
-   **Code:** 200  
    **Content:** `{ <user_object> }`
-   **Error Response:**
-   **Code:** 500
    **Content:** `{ message: "Internal server error" }`

## **How To Run In Local**