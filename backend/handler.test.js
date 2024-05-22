const { getVisitorCount } = require("./handler"); // Replace with the correct path to your lambda function file
const AWS = require("aws-sdk");
const AWSMock = require("aws-sdk-mock").default;

// Set the AWS region
AWS.config.update({ region: "us-east-1" });

describe("getVisitorCount", () => {
  // afterEach(async () => {
  //   AWSMock.restore("DynamoDB.DocumentClient");
  // });

  it("should return visitor count when data is retrieved from DynamoDB", async () => {
    const mockEventData = {
      headers: {
        origin: "example.com",
      },
    };

    const mockDynamoDBGetResponse = {
      Item: {
        Val: 10,
      },
    };

    const mockDynamoDBUpdateResponse = {
      Attributes: {
        Val: 15,
      },
    };

    AWSMock.mock("DynamoDB.DocumentClient", "get", function (params, callback) {
      callback(null, mockDynamoDBGetResponse);
    });

    AWSMock.mock(
      "DynamoDB.DocumentClient",
      "update",
      function (params, callback) {
        callback(null, mockDynamoDBUpdateResponse);
      }
    );

    const result = await getVisitorCount(mockEventData, null, null);
    const body = JSON.parse(result.body);
    expect(result.statusCode).toBe(200);
    expect(body.get).toBe(10);
  });

  it("should increase visitor count by one after retrieving the visitor count", async () => {
    const mockEventData = {
      headers: {
        origin: "example.com",
      },
    };

    const result = await getVisitorCount(mockEventData, null, null);
    const body = JSON.parse(result.body);
    expect(result.statusCode).toBe(200);
    expect(body.updatedValue).toBe(11);
  });

  it("should update the visitorCount in the db and return the value", async () => {
    const mockEventData = {
      headers: {
        origin: "example.com",
      },
    };

    const result = await getVisitorCount(mockEventData, null, null);
    const body = JSON.parse(result.body);
    expect(result.statusCode).toBe(200);
    expect(body.update).toBe(15);
  });

  it("should return an error response when there is an error updating visitor count", async () => {
    const mockEventData = {
      headers: {
        origin: "example.com",
      },
    };
    AWSMock.remock("DynamoDB.DocumentClient", "get", () => {
      throw new Error("Mock DynamoDB error");
    });

    AWSMock.remock("DynamoDB.DocumentClient", "update", () => {
      throw new Error("Mock DynamoDB error");
    });

    const result = await getVisitorCount(mockEventData, null, null);
    expect(result.statusCode).toBe(500);
    expect(result.body).toContain('"error":"Internal Server Error"');
  });
});

async () => {
  restore("DynamoDB.DocumentClient");
};
