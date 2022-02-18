#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();

const env: cdk.Environment = {
    account: app.node.tryGetContext('AWS_ACCOUNT'),
    region: 'ap-northeast-1',
}
new CdkStack(app, 'CdkStack', {
    env,
});
