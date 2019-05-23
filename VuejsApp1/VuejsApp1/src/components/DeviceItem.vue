<template>
    <div>{{device.Name}} in {{device.Location}} owned by </div>
</template>

<script>
  export default {
    name: 'DeviceItem',
    props: ['device']
  }
</script>