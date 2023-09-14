import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { ValidationPipe } from '@nestjs/common';
let server: Handler;

async function bootstrap() {
  console.log('Running on Env:', process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule, { cors: true });

  // solo habilitamos el swagger en modo local
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('Star Wars example')
      .addServer(
        `http://localhost:${process.env.SLS_OFFLINE_PORT}/${process.env.NODE_ENV}/`,
      )
      .setDescription('The Star Wars API description')
      .setVersion('1.0')
      .addTag('starwars')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

  app.enableCors({
    origin: '*',
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.init();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
