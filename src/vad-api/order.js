import Source from "./super/dataSource.js";

/**
 * 增删查改等处理
 */
var tableName = "order";
export default class DataSource extends Source {
  // 默认的内容
  defaultObject = {
    flow:"",
    
price:"",
    
address:"",
    
  };

  // 表单规则
  rules = {
    flow:[{ required: true, message: "必填", trigger: "blur" }],
    
price:[{ required: true, message: "必填", trigger: "blur" }],
    
address:[{ required: true, message: "必填", trigger: "blur" }],
    
  };
  /**
   * 【查询全部】
   * 如果返回数组对象，则页面不翻页，
   * 如果返回{total:88,data:[]}对象，
   * 则页面出现翻页标签。
   *
   * */
  async all(q) {
    let query = Bmob.Query(tableName);
    let count = await query.count();
    if (q.page && q.pageSize) {
      query.skip(q.pageSize * (q.page - 1));
      query.limit(q.pageSize);
    }

    query.order("-createdAt");
    let list = await query.find();
    return {
      total: count,
      data: list,
    };
  }

  // 上传修改
  async edit(obj) {
    let bq = Bmob.Query(tableName);
    let res = await bq.get(obj.objectId);
    res = this.buildObj(res, obj);
    return res.save();
  }

  // 添加
  async add(obj) {
    let res = Bmob.Query(tableName);
    res = this.buildObj(res, obj);
    return res.save();
  }

  // 修改对象
  buildObj(res, obj) {
    res.set("flow", obj.flow)

res.set("price", obj.price)

res.set("address", obj.address)

    return res;
  }

  // 删除
  async deleteObj(obj) {
    let bq = Bmob.Query(tableName);
    return bq.destroy(obj.objectId);
  }
}
