import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication system', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup req', () => {
    const reqEmail = 'asdf5@asdf.ru';

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({ email: reqEmail, password: 'asdf' })
      .then((res) => {
        expect(201);
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(reqEmail);
      });
  });
});
