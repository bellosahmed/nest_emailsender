import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send-email')
  async sendMail() {
    const dto: SendEmailDto = {
      // from: { name: 'Bello', address: 'jb@MaxListeners.com' },
      recipients: [{ name: 'Jb', address: 'bello@gmail.com' }],
      subject: 'Sorry',
      html: '<p> You didnt qualify for the next phase</p>',
    };
    return await this.mailerService.sendEmail(dto);
  }
}
