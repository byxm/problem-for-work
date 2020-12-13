// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportExportData from '../../../app/controller/exportData';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    exportData: ExportExportData;
    home: ExportHome;
  }
}
