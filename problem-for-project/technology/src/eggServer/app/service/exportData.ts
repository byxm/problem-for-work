import { Service } from "egg";
import * as fs from "fs";
import * as path from "path";
import * as stringify from "csv-stringify";

/**
 * Test Service
 */
export default class ExportData extends Service {
  async createData() {
    let arr: any = [];
    // for (let i = 0; i < 3000000; i++) {
    //   arr.push({
    //     name: `simone${i}`,
    //     age: i,
    //     address: `成都${i}`,
    //   });
    // }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 100000; j++) {
        arr.push({
          name: `simone${i}`,
          age: i,
          address: `成都${i}`,
        });
      }
      await this.ctx.model.User.insertMany(arr);
      arr = [];
    }
  }

  // mongodb大量数据以流的形式导出来会非常的快,并且能够不占用node v8本身的内存
  async exportData() {
    const filePath = path.join(__dirname, "../public/user.csv");
    const fileStream = fs.createWriteStream(filePath);
    this.ctx.model.User.find()
      .cursor()
      .pipe(
        stringify({
          header: true,
          columns: {
            name: "name",
            address: "address",
          },
        })
      )
      .pipe(fileStream)
      .on("finish", () => {
        console.log("done....");
      });
  }
}
