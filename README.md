<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "serverless-http-api" to stage "dev" (us-east-1)

✔ Service deployed to stack serverless-http-api-dev (91s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: serverless-http-api-dev-hello (1.6 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [HTTP API (API Gateway V2) event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api).

### Invocation

After successful deployment, you can call the created application via HTTP:

```
https://y4ctijsf8k.execute-api.ap-south-1.amazonaws.com/
```

Which should result in response similar to:

```json
{"message":"hello , Your function executed successfully!","createBy":"Jaydip Dhananjay Jadhav"}
```

### Local development

The easiest way to develop and test your function is to use the `dev` command:

```
serverless dev
```

This will start a local emulator of AWS Lambda and tunnel your requests to and from AWS Lambda, allowing you to interact with your function as if it were running in the cloud.

Now you can invoke the function as before, but this time the function will be executed locally. Now you can develop your function locally, invoke it, and see the results immediately without having to re-deploy.

When you are done developing, don't forget to run `serverless deploy` to deploy the function to the cloud.


 # AWS Credentials
The Serverless Framework needs access to your cloud provider account so that it can create and manage resources on your behalf.


This guide is for the Amazon Web Services (AWS) provider, so we'll step through the process of setting up a connection to AWS for the Serverless Framework.

The Serverless Framework provides multiple methods to connect to AWS. However, the recommended configuration can be time consuming. Below we describe a quick way to get Serverless Framework connected to AWS securely. After that we provide the preferred configuration using multiple accounts to manage production and development deployments of your Serverless application.

 # Quick Connect
If you want a quick way to get Serverless Framework connected to your AWS account, the easiest and simplest way is to use Serverless Dashboard and its Providers feature.

 # Serverless Provider
If you are attempting to add an existing service to the Serverless Dashboard and want to find out more about adding a Provider, we recommend looking at the Provider specific documentation or skip to the next sections that discusses the recommended configuration of AWS accounts for production use.

If you are new to Serverless and adding credentials for your Serverless Framework service, please continue with the steps below:

1. Start by opening your terminal to an empty folder where we will install our first Serverless service.
2. Run the command “serverless”.
3. You will be prompted to choose a new template. If this is your first time, we recommend choosing the “AWS - Node.js - Starter”.
4. When prompted for a name for this new service, you can choose your own name or just leave the default of “aws-node-project”.
5. This will create a new folder with the same name as your new service and add some new files to it.
6. You will then be prompted to login/register for Serverless Dashboard. Just hit enter to choose the default of Y.
7. Your browser window should then open to the login and registration page of Serverless Dashboard. Go ahead and create your account here (Do not worry about creating an org with the right name for now. You can create a new org later to use with the right name).
8. Once you are logged into the Dashboard, return the terminal.
9. Here you should be prompted regarding AWS Credentials. We recommend choosing the “AWS Access Role” option.
10. Once selected this will open your browser once again to the “Add Providers” screen with the “Simple” provider option selected. Click “Connect AWS Provider”.
11. This will open a new browser tab to your AWS account and the CloudFormation service. Just accept the defaults and click “Create Stack” at the bottom.
12. Once the CloudFormation stack is created, switch back to the terminal tab that will detect the Provider has been created.
13. You will then be prompted to deploy. Say “Y” to deploy your first Serverless Framework service.

.....
Note: If you already had AWS credentials on your local machine, the Serverless Framework may have skipped all steps and prompted to do a deployment using those credentials instead of prompting to create a Provider. However, if you just create a provider in your Dashboard account, run “serverless login” and then “serverless deploy” it will use the Dashboard Provider instead.

 # AWS Access Key and Secret
The alternative to using the AWS IAM Role provider is to rather use an access key and secret generated in AWS IAM. These are generally considered insecure since if anyone gained access to those credentials, they have access to your AWS account.

However, if you must use an access key and secret pair, these can be added as a provider in Serverless Dashboard by choosing the “Access/Secret Keys” tab and inserting the credentials to be used.

# Production Configuration
While you might be able to get up and running with a single account quickly to try out Serverless Framework, the recommended configuration when setting up a Serverless application is a little different and consists of using multiple AWS accounts.