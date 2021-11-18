import {Controller, Get, Put, Param, Body, Request, NotFoundException} from '@nestjs/common';
import {StatusService} from "./status.service";
import {statusDto} from "./status.dto";
import {Status} from "./status.model";

@Controller('status')
export class StatusController {

    constructor(private readonly statusService: StatusService) {}

    @Get()
    async findAll() {
        return await this.statusService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() post: statusDto, @Request() req): Promise<[number, Status[]]> {

        const query = await this.statusService.update(id, post);

        // TODO this is not elegant. Let's deal with a nice return within statusService maybe...
        if (query[0]===0) {
            throw new NotFoundException('Malformed body or no such entry');
        }

        // return the updated post
        return query;
    }
}
