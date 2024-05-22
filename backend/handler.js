const AWS = require("aws-sdk");

// Initialize the DynamoDB client
// const dynamoDB = new AWS.DynamoDB.DocumentClient();
let dynamoDB;

module.exports.getVisitorCount = async (event, context, callback) => {
  dynamoDB = dynamoDB ? dynamoDB : new AWS.DynamoDB.DocumentClient();
  try {
    const origin = event.headers.origin;
    // Define parameters for the DynamoDB update
    const getParams = {
      TableName: "ResumeChallenge",
      Key: {
        Variables: "visitor_count", // Assuming "visitor_count" is the sort key
      },
    };
    const getData = await dynamoDB.get(getParams).promise();

    console.log("getData: ", getData);
    if (getData.Item && getData.Item.Val) {
      currentVisitorCount = getData.Item.Val;
    }
    console.log("visitor count: ", currentVisitorCount);
    // Increment the visitor count
    const updatedVisitorCount = currentVisitorCount + 1;

    const updateParams = {
      TableName: "ResumeChallenge",
      Key: {
        Variables: "visitor_count", // Assuming "visitor_count" is the sort key
      },
      UpdateExpression: "SET Val = :newCount",
      ExpressionAttributeValues: {
        ":newCount": updatedVisitorCount,
      },
      ReturnValues: "UPDATED_NEW", // Return the updated value after the update
    };

    // Execute the DynamoDB update
    const data = await dynamoDB
      .update(updateParams, function (err, data) {
        // if (err) {
        //   console.log("Error", err);
        // } else {
        //   console.log("Success", data);
        // }
      })
      .promise();

    // Extract the updated visitor count from the response
    const visitorCount = data.Attributes ? data.Attributes.Val : 0;
    // Return a response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,GET",
      },
      body: JSON.stringify({
        get: currentVisitorCount,
        updatedValue: updatedVisitorCount,
        update: visitorCount,
      }),
    };
  } catch (error) {
    // console.error("Error updating visitor count:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
