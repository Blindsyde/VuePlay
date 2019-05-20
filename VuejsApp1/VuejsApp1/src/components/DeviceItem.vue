<template>
    <div>{{device.deviceName}} in {{device.deviceLocation}}</div>
</template>

<script>
  export default {
    name: 'DeviceItem',
    props: ['device']
  }
</script>