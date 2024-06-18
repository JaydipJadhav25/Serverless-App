exports.hello = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello , Your function executed successfully!",
        createBy : "Jaydip Dhananjay Jadhav"
        
      }),
    };
  };
  