<template>
    <div>{{info.devicename}} in {{info.devicelocation}} owned by {{info.firstname}}</div>
</template>

<script>
  export default {
    name: 'InfoItem',
    props: ['info']
  }
</script>