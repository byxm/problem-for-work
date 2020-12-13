import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.post('/create/data', controller.exportData.createData)


  router.get('/export/data', controller.exportData.exportBigData)
};
