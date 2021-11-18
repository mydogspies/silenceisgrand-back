import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {DatabaseModule} from "./database.module";
import {StatusModule} from "./status.module";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        DatabaseModule,
        StatusModule,
    ]
})
export class AppModule {}
