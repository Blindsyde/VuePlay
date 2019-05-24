<template>
    <div>{{device.Name}} in {{device.Location}} owned by {{user.FirstName}}</div>
</template>

<script>
  export default {
    name: 'DeviceItem',
    props: ['device', 'user']
  }
</script>