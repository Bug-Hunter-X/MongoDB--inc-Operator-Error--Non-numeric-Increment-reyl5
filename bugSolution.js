```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
// Handle field2 separately if needed.  For example to update to a specific string value:
//db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$set:{field2:"someString"}});
```