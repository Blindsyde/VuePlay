<template>
    <div>
        <h4 v-if="loading">Loading...</h4>
        <device-item v-for="device in devices"
                   :key="device.DeviceId"
                   :device="device"
                   :user="user">
        </device-item>
    </div>
</template>

<script>
    import { ALL_DEVICES_QUERY } from '../constants/graphql'
    import DeviceItem from './DeviceItem'
  export default {
    name: 'DeviceList',
    data () {
      return {
          devices: [],
          users: [],
        loading: 0
      }
    },
    components: {
      DeviceItem
    },
    apollo: {
      devices: {
        query: ALL_DEVICES_QUERY
      },
      users: {
        query: ALL_DEVICES_QUERY
      }
    }
  }
</script>