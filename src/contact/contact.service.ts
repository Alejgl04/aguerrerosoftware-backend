import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  async create(createContactDto: CreateContactDto) {
    await this.mailerService
      .sendMail({
        to: 'alejo.jesus.magne@gmail.com', // list of receivers
        from: 'noreply@nestjs.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: `
          <h2>Welcome</h2>
          ${createContactDto.services} <br />
          ${createContactDto.email} <br />
          ${createContactDto.name} <br />
          ${createContactDto.message}
        `, // HTML body content
      })
      .then(() => {
        console.log('true');
      })
      .catch(() => {
        console.log('false');
      });
  }

  findAll() {
    return `This action returns all contact`;
  }
}
