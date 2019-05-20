<template>
    <div>
        <h4 v-if="loading">Loading...</h4>
        <device-item v-for="device in devices"
                   :key="device.deviceId"
                   :device="device">
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
        loading: 0
      }
    },
    components: {
      DeviceItem
    },
    apollo: {
      devices: {
        query: ALL_DEVICES_QUERY
      }
    }
  }
</script>