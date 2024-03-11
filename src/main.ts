import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // CORS configuration
  const corsOptions: CorsOptions = {
    origin: true, // You can set specific origins or use a boolean value for all origins
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], // Set allowed HTTP methods
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true, // Allow sending cookies from the client
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe', // Set allowed headers
    maxAge: 3600, // Set max age for preflight requests (in seconds)
    exposedHeaders: 'Authorization', // Expose specific headers to the client
  };

  app.enableCors(corsOptions); // Enable CORS with the defined options

  const config = new DocumentBuilder()
    .setTitle('Ridenz')
    .setDescription('The Global App')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
