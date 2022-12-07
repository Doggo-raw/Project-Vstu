import { config } from '@keystone-6/core';
import { withAuth, session } from './auth';
import {lists} from "./schema";


export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: 'postgres://istversint:d8ZAIWJvVTB3@ep-wandering-mud-954787.eu-central-1.aws.neon.tech/neondb',
        },
        lists,
    session,
  })
);
