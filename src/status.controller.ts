import {Controller, Get, Put, Param, Body, Request, NotFoundException} from '@nestjs/common';
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
    async update(@Param('id') id: number, @Body() post: statusDto, @Request() req): Promise<number> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows} = await this.statusService.update(id, post);

        // if the number of row affected is zero,
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return numberOfAffectedRows;
    }
}
