import Mock from 'mockjs'

function exampleDetail() {
  return {
    ID: 1,
    createdAt: Mock.Random.datetime(),
    // 数据类型
    dataType: '222',
    // 分组号
    groupID: Mock.Random.integer(0, 99),
    // 经纬度
    latitude: Mock.Random.float(0, 180).toFixed(6),
    longitude: Mock.Random.float(0, 180).toFixed(6),
    // 多级构件号
    multStructID: Mock.Random.integer(0, 99),
    // ？？？
    projectID: 1,
    // ？？？
    scanPos: '123',
    // 焊缝号
    sealID: Mock.Random.integer(0, 9999),
    // 分段号
    sectionID: Mock.Random.integer(0, 99),
    // ？？？
    thickness: '123',
    // ？？？
    videoURL: '222'
  }
}

export default {
  all() {
    return {
      status: true,
      data: [
        {
          ID: Mock.Random.integer(0, 99),
          createdAt: Mock.Random.datetime(),
          name: Mock.Random.name()
        },
        {
          ID: Mock.Random.integer(0, 99),
          createdAt: Mock.Random.datetime(),
          name: Mock.Random.name()
        }
      ]
    }
  },

  projectDetail(config) {
    console.log('mock config',config)
    const list = []
    for (let i = 0; i < 20; i++) {
      const e = exampleDetail()
      list.push(e)
    }
    return {
      status: true,
      data: list
    }
  },

}
