import { Controller, Get, Query } from '@nestjs/common';
import { FindHotelsParams } from './types';
import { hotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
    @Get('/')
    findHotels(@Query() query: FindHotelsParams){
      return hotelsService.findHotels(query);
    }
}
