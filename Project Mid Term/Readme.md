#Video

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
