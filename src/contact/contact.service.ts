import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  create(createContactDto: CreateContactDto) {
    const { name, email, services, message } = createContactDto;
    return new Promise((resolve, reject) => {
      const sendMailAdmin = this.mailerService.sendMail({
        to: 'alejo.jesus.magne@gmail.com', // list of receivers
        from: 'admin@info.com', // sender address
        subject: 'New Message From: aguerrerosoftware.com ✔', // Subject line
        html: `
        <div style="background:#cdcdcd;padding:20px;font-size:20px;">
          <div style="background:white;width: 70%;margin: auto;padding: 15px;">
            <img src="cid:logo"/>
            <hr>
            Hello Alejandro.
            <br><br>
            ${name} has sent a new message. 
            <br><br>
            Here is the body content:
            <br>
            <b>Name:</b> ${name} <br>
            <b>Email:</b> ${email} <br>
            <b>Services:</b> - ${services} - <br>
            <b>Message:</b> ${message}
            </div>
        </div>
        `, // HTML body content
      });
      if (sendMailAdmin) {
        resolve({
          ok: true,
          message: 'Message has been sent successfully',
        });
      }
      return reject(false);
    });
  }

  findAll() {
    return `This action returns all contact`;
  }
}
