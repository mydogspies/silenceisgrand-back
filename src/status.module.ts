import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { statusProviders } from './status.provider';
import {StatusController} from "./status.controller";

@Module({
    controllers: [StatusController],
    providers: [StatusService, ...statusProviders],
    exports: [StatusService],
})
export class StatusModule {}
