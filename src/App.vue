<template>
  <div>
    <h1>Hello App</h1>
    <ul>
      <li><router-link to="/foo">点我跳转到foo</router-link></li>
      <li><router-link to="/bar">点我跳转到bar</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      msg: 'hello world'
    }
  }
}
</script>