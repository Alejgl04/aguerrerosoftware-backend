import { Module } from '@nestjs/common';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    PortfolioModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
    ContactModule,
  ],
})
export class AppModule {}
