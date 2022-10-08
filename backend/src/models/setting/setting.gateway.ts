import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SettingService } from './setting.service';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SettingGateway {
  constructor(private readonly settingService: SettingService) {}

  @WebSocketServer()
  server: Server;
}
