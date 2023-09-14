import { Injectable } from '@nestjs/common';
//import { RedisCacheService } from './redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  //constructor(private readonly redisService: RedisCacheService) {}
  async getHello() {
    /*
    await this.redis.set('dioses_soles', JSON.stringify([{ key: '32' }, { ttl: '30' }]));
    const redisData = await this.redis.get('dioses_soles');*/
    //await this.redisService.set('dioses_soles', [{ key: '32' }, { ttl: '30' }]);
    return 'procesado';
  }

  async dataResult() {
    //const data = await this.redisService.get('dioses_soles');
    return [];
  }
}
