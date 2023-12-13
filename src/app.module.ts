import { Module } from '@nestjs/common';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PortfolioModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
  ],
})
export class AppModule {}
