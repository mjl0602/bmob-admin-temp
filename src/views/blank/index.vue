<template>
  <div style="margin:32px;">
    <p>欢迎使用</p>
  </div>
</template>

<script>
// import Api from '../api/api.js'
export default {
  data() {
    return {}
  },
  created() {
    console.log('Welcome')
    this.getData()
  },
  methods: {
    async getData() {
      // console.log(await Api.get('/fuck'))
    }
  }
}
</script>
