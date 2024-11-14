import { FastifyInstance } from 'fastify';

import { verifyJwt } from '@/http/middlewares/verify-jwt';

import { register } from './register';

import { authenticate } from '@/http/controllers/authenticate';

import { profile } from '@/http/controllers/profile';

import { refresh } from './refresh';

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register);

  app.post('/sessions', authenticate);

  app.patch('/token/refresh', refresh);

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJwt] }, profile);
}