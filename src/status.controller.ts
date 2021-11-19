import {Controller, Get, Put, Param, Body, Request} from '@nestjs/common';
import {StatusService} from "./status.service";
import {statusDto} from "./status.dto";

@Controller('status')
export class StatusController {

    constructor(private readonly statusService: StatusService) {}

    @Get()
    async findAll() {
        return await this.statusService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() post: statusDto, @Request() req): Promise<any> {
        return await this.statusService.update(id, post);
    }
}
