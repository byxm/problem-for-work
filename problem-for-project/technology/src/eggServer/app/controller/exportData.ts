import { Controller } from 'egg';

export default class HomeController extends Controller {
    
    async createData() {
        await this.ctx.service.exportData.createData();
        this.ctx.body = '新增数据成功'
    }

    async exportBigData() {
        const res = await this.ctx.service.exportData.exportData();

        
        console.log('返回的数据', res);
        
    }

}
