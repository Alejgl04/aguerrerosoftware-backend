import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  controllers: [ContactController],
  providers: [ContactService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'aguerrerodev.web@gmail.com',
          pass: 'nawcmccrboiwxqdl',
        },
      },
    }),
  ],
})
export class ContactModule {}
